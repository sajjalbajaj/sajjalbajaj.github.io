-- Backend-only operations preserve transactions while browser roles remain denied.
create table if not exists public.forum_settings (
  key text primary key,
  value text not null
);
alter table public.forum_settings enable row level security;
revoke all on public.forum_settings from public, anon, authenticated;
grant all on public.forum_settings to service_role;
insert into public.forum_settings(key,value) values
  ('token_secret', encode(extensions.gen_random_bytes(48),'hex')),
  ('worker_secret', encode(extensions.gen_random_bytes(48),'hex'))
on conflict (key) do nothing;

alter table public.posts add column if not exists request_key text;
alter table public.jobs add column if not exists claimed_until double precision;
alter table public.mail add column if not exists claimed_until double precision;
alter table public.mail add column if not exists person text references public.people(id);
alter table public.uploads add column if not exists created double precision not null default extract(epoch from now());
create unique index if not exists posts_request_key on public.posts(request_key) where request_key is not null;
create index if not exists posts_topic_parent on public.posts(topic,parent);
create index if not exists topics_site_created on public.topics(site,created desc);
create index if not exists jobs_pending_due on public.jobs(due) where state='pending';
create index if not exists mail_pending_due on public.mail(due) where sent is null;
create index if not exists subscriptions_person on public.subscriptions(person);
create index if not exists uploads_post on public.uploads(post);
create index if not exists reports_post on public.reports(post);
create index if not exists posts_person on public.posts(person);
create index if not exists topics_person on public.topics(person);
create index if not exists mail_topic on public.mail(topic);
create index if not exists mail_person on public.mail(person);

create or replace function public.forum_rate(p_key text, p_max integer, p_window integer)
returns boolean language plpgsql security invoker set search_path = '' as $$
declare hits integer;
begin
  insert into public.limits(key,count,expires)
  values(p_key,1,extract(epoch from now())+p_window)
  on conflict(key) do update set
    count=case when public.limits.expires < extract(epoch from now()) then 1 else public.limits.count+1 end,
    expires=case when public.limits.expires < extract(epoch from now()) then extract(epoch from now())+p_window else public.limits.expires end
  returning count into hits;
  return hits <= p_max;
end $$;
revoke all on function public.forum_rate(text,integer,integer) from public,anon,authenticated;
grant execute on function public.forum_rate(text,integer,integer) to service_role;

create or replace function public.forum_mutate(
  p_site text, p_actor text, p_guest text, p_action text,
  p_data jsonb, p_owner boolean default false
) returns jsonb language plpgsql security invoker set search_path = '' as $$
declare
  topic_row public.topics%rowtype;
  parent_row public.posts%rowtype;
  old_post public.posts%rowtype;
  topic_id text := p_data->>'topic';
  post_id text := gen_random_uuid()::text;
  public_name text;
  owner_name text := case p_site when 'sajjal' then 'Sajjal Bajaj' else 'Ankush Kaura' end;
  post_kind text := 'community';
  now_epoch double precision := extract(epoch from now());
  upload_id text;
  uploads jsonb := coalesce(p_data->'files','[]'::jsonb);
  subscription_mode text := coalesce(p_data->>'subscription','all');
  v_request_key text := p_data->>'request_key';
  target_id text := p_data->>'post';
begin
  if p_site not in ('sajjal','ankush') then raise exception 'Unknown site'; end if;
  if p_actor is not null and not exists(select 1 from public.people where id=p_actor and site=p_site) then
    raise exception 'Invalid identity';
  end if;
  if v_request_key is not null then
    perform pg_advisory_xact_lock(hashtext(v_request_key));
    select * into old_post from public.posts where posts.request_key=v_request_key;
    if found then
      if old_post.person is distinct from p_actor or old_post.guest is distinct from p_guest
         or not exists(select 1 from public.topics where id=old_post.topic and site=p_site) then
        raise exception 'Request belongs to another identity';
      end if;
      return jsonb_build_object('id',case when p_action='question' then old_post.topic else old_post.id end,'post',old_post.id);
    end if;
  end if;

  if p_action='question' then
    if p_actor is null then raise exception 'Verify your email before asking a question'; end if;
    topic_id := gen_random_uuid()::text;
    insert into public.topics(id,site,person,title,context,created)
    values(topic_id,p_site,p_actor,p_data->>'title',coalesce(p_data->>'context',''),now_epoch);
    public_name := 'Question author';
  else
    select * into topic_row from public.topics where id=topic_id and site=p_site for update;
    if not found then raise exception 'Discussion not found'; end if;
    if p_action in ('reply','resolve','subscribe') and not exists(
      select 1 from public.posts where topic=topic_id and parent is null and hidden=false
    ) then raise exception 'Discussion not found'; end if;
  end if;

  if p_action='subscribe' then
    if p_actor is null then raise exception 'Verify your email first'; end if;
    insert into public.subscriptions(topic,person,mode) values(topic_id,p_actor,subscription_mode)
    on conflict(topic,person) do update set mode=excluded.mode;
    return jsonb_build_object('ok',true);
  end if;
  if p_action='resolve' then
    if not p_owner and topic_row.person is distinct from p_actor then raise exception 'Only the question author or owner can resolve this discussion'; end if;
    if p_data->>'accepted' is not null and not exists(
      select 1 from public.posts where id=p_data->>'accepted' and topic=topic_id and parent is not null and hidden=false
    ) then raise exception 'Choose an answer in this discussion'; end if;
    update public.topics set accepted=p_data->>'accepted',state=coalesce(p_data->>'state','Resolved') where id=topic_id;
    return jsonb_build_object('ok',true);
  end if;
  if p_action='moderate' then
    if not p_owner then raise exception 'Owner access required'; end if;
    update public.posts set hidden=coalesce((p_data->>'hidden')::boolean,false) where id=target_id and topic=topic_id;
    if not found then raise exception 'Post not found'; end if;
    if (p_data->>'hidden')::boolean then
      update public.topics set accepted=null,state='Open' where id=topic_id and accepted=target_id;
    end if;
    if p_data->>'attachment' is not null then
      update public.uploads set post=null where id=p_data->>'attachment' and post=target_id and site=p_site;
    end if;
    return jsonb_build_object('ok',true);
  end if;
  if p_action not in ('question','reply') then raise exception 'Unknown operation'; end if;
  if length(coalesce(p_data->>'body','')) not between 1 and 20000 then raise exception 'Enter a message up to 20000 characters'; end if;
  if p_action='question' and length(coalesce(p_data->>'title','')) not between 1 and 180 then raise exception 'Enter a title up to 180 characters'; end if;
  if jsonb_typeof(uploads)<>'array' or jsonb_array_length(uploads)>5 then raise exception 'Attach up to five files'; end if;

  if p_action='reply' then
    select * into parent_row from public.posts where id=p_data->>'parent' and topic=topic_id and hidden=false;
    if not found then raise exception 'Choose a parent reply in this discussion'; end if;
    if p_owner then
      public_name := owner_name;
      post_kind := case when p_data->>'kind'='guide' then 'guide' else 'owner' end;
      if post_kind='guide' and (topic_row.state='Resolved' or exists(
        select 1 from public.posts where parent=parent_row.id and hidden=false
      )) then return jsonb_build_object('skipped',true); end if;
    elsif p_actor is not null and topic_row.person=p_actor then
      public_name := 'Question author';
    elsif coalesce((p_data->>'guest')::boolean,false) then
      if p_guest is null then raise exception 'Guest session required'; end if;
      public_name := 'Guest ' || substr(md5(topic_id || p_guest),1,6);
    else
      if p_actor is null then raise exception 'Verify your email to reply by name'; end if;
      public_name := btrim(p_data->>'display');
      if length(coalesce(public_name,'')) not between 1 and 80
        or lower(public_name) in (lower(owner_name),'question author') then raise exception 'Choose a valid public display name'; end if;
    end if;
  end if;

  insert into public.posts(id,topic,parent,person,guest,display,body,kind,source,created,request_key)
  values(post_id,topic_id,parent_row.id,p_actor,p_guest,public_name,p_data->>'body',post_kind,
         case when post_kind='guide' then p_data->>'source' else null end,now_epoch,v_request_key);
  for upload_id in select jsonb_array_elements_text(uploads) loop
    update public.uploads set post=post_id where id=upload_id and site=p_site
      and actor=coalesce(p_actor,p_guest) and post is null and created > now_epoch-86400;
    if not found then raise exception 'An attachment is missing or already attached'; end if;
  end loop;
  if p_actor is not null then
    insert into public.subscriptions(topic,person,mode) values(topic_id,p_actor,subscription_mode)
    on conflict(topic,person) do update set mode=excluded.mode;
  end if;
  if p_action='question' or (coalesce((p_data->>'question')::boolean,false) and not p_owner) then
    insert into public.jobs(post,due) values(post_id,now_epoch+60) on conflict(post) do nothing;
  end if;
  if p_action='reply' then
    update public.topics set state=case when coalesce((p_data->>'question')::boolean,false) then 'Open' else 'Answered' end where id=topic_id;
    insert into public.mail(id,site,recipient,subject,body,topic,person,due)
    select gen_random_uuid()::text,p_site,p.email,'New reply — ' || topic_row.title,
      public_name || case when post_kind='guide' then ' — automated answer from my guides' else '' end || E'\n\n'
      || left(p_data->>'body',4000) || E'\n\nOpen this reply\n'
      || case p_site when 'sajjal' then 'https://www.sajjalbajaj.in' else 'https://www.ankushkaura.in' end
      || '/forum/?topic=' || topic_id || '&post=' || post_id
      || case when post_kind='guide' then E'\n\nSource\n' || (p_data->>'source') else '' end,
      topic_id,p.id,now_epoch
    from public.subscriptions s join public.people p on p.id=s.person
    where s.topic=topic_id and p.site=p_site and p.id is distinct from p_actor
      and (s.mode='all' or (s.mode='direct' and p.id=parent_row.person));
  end if;
  return jsonb_build_object('id',case when p_action='question' then topic_id else post_id end,'post',post_id);
end $$;
revoke all on function public.forum_mutate(text,text,text,text,jsonb,boolean) from public,anon,authenticated;
grant execute on function public.forum_mutate(text,text,text,text,jsonb,boolean) to service_role;

create or replace function public.forum_claim(p_queue text,p_count integer default 10)
returns setof jsonb language plpgsql security invoker set search_path='' as $$
begin
  if p_queue='jobs' then
    return query with selected as (
      select post from public.jobs where state='pending' and due<=extract(epoch from now())
        and coalesce(claimed_until,0)<extract(epoch from now()) order by due limit least(p_count,20) for update skip locked
    ), claimed as (
      update public.jobs j set claimed_until=extract(epoch from now())+180 from selected s where j.post=s.post returning j.*
    ) select to_jsonb(c) from claimed c;
  elsif p_queue='mail' then
    return query with selected as (
      select id from public.mail where sent is null and attempts<8 and due<=extract(epoch from now())
        and coalesce(claimed_until,0)<extract(epoch from now()) order by due limit least(p_count,20) for update skip locked
    ), claimed as (
      update public.mail m set claimed_until=extract(epoch from now())+180 from selected s where m.id=s.id returning m.*
    ) select to_jsonb(c) from claimed c;
  end if;
end $$;
revoke all on function public.forum_claim(text,integer) from public,anon,authenticated;
grant execute on function public.forum_claim(text,integer) to service_role;

create or replace function public.forum_topics(p_site text)
returns table(id text,title text,context text,state text,created double precision,replies bigint)
language sql stable security invoker set search_path='' as $$
  select t.id,t.title,t.context,t.state,t.created,
    (select count(*)-1 from public.posts p where p.topic=t.id and not p.hidden) as replies
  from public.topics t where t.site=p_site and exists(
    select 1 from public.posts root where root.topic=t.id and root.parent is null and not root.hidden
  ) order by t.created desc limit 200;
$$;
revoke all on function public.forum_topics(text) from public,anon,authenticated;
grant execute on function public.forum_topics(text) to service_role;

create or replace function public.forum_expired_uploads()
returns table(id text,path text) language sql security invoker set search_path='' as $$
  with selected as (
    select u.id from public.uploads u where u.post is null
      and u.created < extract(epoch from now())-86400
    limit 20 for update skip locked
  )
  update public.uploads u set actor='' from selected s where u.id=s.id
  returning u.id,u.path;
$$;
revoke all on function public.forum_expired_uploads() from public,anon,authenticated;
grant execute on function public.forum_expired_uploads() to service_role;
