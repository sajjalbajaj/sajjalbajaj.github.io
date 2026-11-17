"""Focused checks for private identities, site isolation, queues, and reply ownership."""
import io
import os
import tempfile
import unittest
from unittest.mock import patch

TEMP = tempfile.TemporaryDirectory()
os.environ['FORUM_DATA'] = TEMP.name
os.environ['FORUM_SECRET'] = 'test-secret-only-' * 4
os.environ['FORUM_PUBLIC_URL'] = 'https://forum.example.test'
os.environ['SMTP_HOST'] = 'smtp.example.test'
os.environ['MAIL_FROM_SAJJAL'] = 'forum@sajjalbajaj.in'
os.environ['MAIL_FROM_ANKUSH'] = 'forum@ankushkaura.in'
os.environ['FORUM_ADMIN_SAJJAL'] = 'sajjal-owner-test'
os.environ['FORUM_ADMIN_ANKUSH'] = 'ankush-owner-test'
import app
import worker


class ForumTest(unittest.TestCase):
    def setUp(self):
        self.client = app.app.test_client()
        with app.database() as db:
            for table in ('uploads','jobs','mail','reports','subscriptions','posts','topics','people','used_tokens','limits'):
                db.execute(f'DELETE FROM {table}')
        self.first = self.person('sajjal', 'private@example.com', 'Private Name')
        self.second = self.person('sajjal', 'helper@example.com', 'Helper Private')
        self.other = self.person('ankush', 'private@example.com', 'Different Identity')

    def person(self, site, email, name):
        person = app.secrets.token_urlsafe(18)
        with app.database() as db:
            db.execute('INSERT INTO people VALUES(?,?,?,?,?)', (person,site,email,name,'9914000000'))
        return app.signed({'site':site,'person':person,'purpose':'session'})

    def headers(self, token):
        return {'Authorization':'Bearer '+token}

    def question(self):
        response = self.client.post('/api/sajjal/topics', headers=self.headers(self.first),
            json={'title':'How do I configure stock routes?', 'body':'I need help with stock routes.', 'context':'', 'files':[]})
        self.assertEqual(response.status_code,201,response.json)
        return response.json

    def reply(self, topic, parent, token=None, **kwargs):
        return self.client.post(f'/api/sajjal/topics/{topic}/posts', headers=self.headers(token or self.second),
            json={'parent':parent,'body':'Use the published guide.', 'display':'Helpful reader', **kwargs})

    def test_private_fields_and_site_isolation(self):
        topic = self.question()
        response = self.client.get('/api/sajjal/topics/'+topic['id'])
        self.assertEqual(response.status_code,200)
        for private in ('private@example.com','Private Name','9914000000','person','guest'):
            self.assertNotIn(private,response.get_data(as_text=True))
        self.assertEqual(self.client.get('/api/ankush/topics/'+topic['id']).status_code,404)
        self.assertEqual(self.client.post('/api/ankush/topics',headers=self.headers(self.first),json={}).status_code,403)
        self.assertEqual(self.client.get('/api/ankush/topics').json['topics'],[])

    def test_reply_notifications_and_deep_followup(self):
        topic = self.question()
        reply = self.reply(topic['id'],topic['post'])
        self.assertEqual(reply.status_code,201,reply.json)
        followup = self.reply(topic['id'],reply.json['id'],self.first,question=True)
        self.assertEqual(followup.status_code,201)
        with app.database() as db:
            recipients = [r['recipient'] for r in db.execute('SELECT recipient FROM mail ORDER BY rowid')]
            self.assertEqual(recipients,['private@example.com','helper@example.com'])
        detail = self.client.get('/api/sajjal/topics/'+topic['id']).json
        self.assertEqual(detail['posts'][-1]['parent'],reply.json['id'])
        self.assertEqual(detail['posts'][-1]['display'],'Question author')

    def test_parent_cross_thread_and_accept_validation(self):
        first, second = self.question(),self.question()
        self.assertEqual(self.reply(first['id'],second['post']).status_code,400)
        self.assertEqual(self.client.post('/api/sajjal/topics/'+first['id']+'/resolve',
            headers=self.headers(self.second),json={'state':'Resolved'}).status_code,403)
        self.assertEqual(self.client.post('/api/sajjal/topics/'+first['id']+'/resolve',
            headers=self.headers(self.first),json={'accepted':second['post']}).status_code,400)

    def test_guest_and_owner_impersonation(self):
        topic = self.question()
        self.assertEqual(self.reply(topic['id'],topic['post'],display='Sajjal Bajaj').status_code,400)
        guest = self.client.post('/api/sajjal/guest',json={}).json['token']
        response = self.reply(topic['id'],topic['post'],guest,guest=True)
        self.assertEqual(response.status_code,201,response.json)
        detail = self.client.get('/api/sajjal/topics/'+topic['id']).json
        self.assertTrue(detail['posts'][-1]['display'].startswith('Guest '))
        self.assertEqual(self.client.post('/api/sajjal/topics',headers=self.headers(guest),json={}).status_code,401)

    def test_email_links_are_single_use_and_purpose_scoped(self):
        current = app.decoded(self.first)
        verification = app.signed({**current,'purpose':'verify'},1800)
        self.assertEqual(self.client.post('/api/sajjal/verify',json={'token':verification}).status_code,200)
        self.assertEqual(self.client.post('/api/sajjal/verify',json={'token':verification}).status_code,401)
        self.assertEqual(self.client.get('/api/sajjal/topics/unknown',headers=self.headers(verification)).status_code,403)

    def test_uploads_not_public_until_attached_and_hidden_files_blocked(self):
        upload = self.client.post('/api/sajjal/uploads',headers=self.headers(self.first),
            data={'file':(io.BytesIO(b'error log'),'log.txt','text/plain')}).json
        url = '/api/sajjal/uploads/'+upload['id']
        self.assertEqual(self.client.get(url).status_code,404)
        result = self.client.post('/api/sajjal/topics',headers=self.headers(self.first),json={
            'title':'A question','body':'Details','files':[upload['id']]}).json
        with self.client.get(url) as response:
            self.assertEqual(response.status_code,200)
        self.assertEqual(self.client.get('/api/ankush/uploads/'+upload['id']).status_code,404)
        self.client.post('/api/sajjal/moderate',headers={'X-Admin-Key':'sajjal-owner-test'},json={'post':result['post'],'hidden':True})
        self.assertEqual(self.client.get(url).status_code,404)
        self.assertEqual(self.client.get('/api/sajjal/topics/'+result['id']).status_code,404)
        self.assertEqual(self.client.get('/api/sajjal/topics').json['topics'],[])

    def test_supported_guide_answers_once_and_community_suppresses_duplicate(self):
        topic = self.question()
        sources = {'sajjal':[{'title':'Stock routes','url':'https://www.sajjalbajaj.in/blog/routes/',
            'faqs':[{'q':'How do I configure stock routes?','a':'Open Inventory and enable routes.'}]}]}
        worker.answer_job(topic['post'],sources)
        worker.answer_job(topic['post'],sources)
        detail = self.client.get('/api/sajjal/topics/'+topic['id']).json
        self.assertEqual(len(detail['posts']),2)
        self.assertEqual(detail['posts'][1]['kind'],'guide')
        second = self.question()
        self.reply(second['id'],second['post'])
        worker.answer_job(second['post'],sources)
        self.assertEqual(len(self.client.get('/api/sajjal/topics/'+second['id']).json['posts']),2)

    def test_subscription_and_origin_restriction(self):
        topic = self.question()
        current = app.decoded(self.first)
        token = app.signed({**current,'purpose':'unsubscribe','topic':topic['id']})
        self.assertEqual(self.client.post('/api/sajjal/unsubscribe',json={'token':token}).status_code,200)
        self.reply(topic['id'],topic['post'])
        with app.database() as db:
            self.assertEqual(db.execute('SELECT count(*) FROM mail').fetchone()[0],0)
        self.assertEqual(self.client.post('/api/sajjal/guest',headers={'Origin':'https://attacker.test'},json={}).status_code,403)


if __name__ == '__main__':
    unittest.main()
