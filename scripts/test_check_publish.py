"""Regression cases for accidental publication of private files or credentials."""
import base64
from pathlib import Path
import tempfile
import unittest

from check_publish import credential_categories, inspect_file, path_problem


class PublicationSafetyTests(unittest.TestCase):
    def test_private_paths_and_backend_output(self):
        for name in ["content-review/linkedin/queue.json", "PROJECT_MEMORY.md", "docs/ai/notes.md", ".env.production", "backup/forum.sqlite"]:
            with self.subTest(name=name):
                self.assertIsNotNone(path_problem(Path(name)))
        self.assertIsNone(path_problem(Path("supabase/functions/forum/index.ts")))
        self.assertIsNotNone(path_problem(Path("supabase/functions/forum/index.ts"), site=True))
        self.assertIsNone(path_problem(Path("forum/index.html"), site=True))
        self.assertIsNone(path_problem(Path("privacy/index.html"), site=True))
        self.assertIsNone(path_problem(Path("forum-service/.env.example")))
        self.assertIsNotNone(path_problem(Path("forum-service/.env.example"), site=True))

    def test_privileged_tokens_are_detected_without_blocking_public_identifiers(self):
        secret = b"sb_secret_" + b"x" * 30
        self.assertIn("Supabase secret key", credential_categories(secret))
        header = base64.urlsafe_b64encode(b'{"alg":"HS256"}').rstrip(b"=")
        for role, expected in [("service_role", True), ("anon", False)]:
            payload = base64.urlsafe_b64encode(('{"role":"' + role + '"}').encode()).rstrip(b"=")
            token = header + b"." + payload + b".signature"
            self.assertEqual("privileged Supabase JWT" in credential_categories(token), expected)
        self.assertFalse(credential_categories(b"G-G2NTL6M604 sb_publishable_example https://example.supabase.co"))

    def test_symlinks_and_credentials_across_read_boundaries(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            (root / "private.txt").write_text("private")
            (root / "alias.txt").symlink_to(root / "private.txt")
            self.assertIn("symlink requires review", inspect_file(root, Path("alias.txt")))
            token = b"ghp_" + b"a" * 36
            (root / "asset.bin").write_bytes(b"x" * (1024 * 1024 - 8) + b"\n" + token)
            self.assertIn("GitHub token", inspect_file(root, Path("asset.bin")))


if __name__ == "__main__":
    unittest.main()
