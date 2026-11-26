create policy deny_client_access on public.forum_settings for all to anon, authenticated using(false) with check(false);
create extension if not exists pg_cron;
create extension if not exists pg_net with schema extensions;
select cron.schedule(
  'forum-process-queues', '* * * * *',
  $job$
    select net.http_post(
      url := 'https://gyhwaesybhbwqmcylzxz.supabase.co/functions/v1/forum/worker',
      headers := jsonb_build_object(
        'Content-Type','application/json',
        'X-Worker-Key',(select value from public.forum_settings where key='worker_secret')
      ),
      body := '{}'::jsonb,
      timeout_milliseconds := 120000
    );
  $job$
);
