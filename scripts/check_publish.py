"""Reject private files and obvious credentials before publishing a public site.

This is a narrow guardrail, not a replacement for GitHub secret scanning or review.
Only filenames and credential categories are reported, never matching values.
"""
import argparse
import base64
import json
from pathlib import Path
import re
import subprocess
import sys

PRIVATE_PARTS = {"content-review", "cv-pdf", ".git", ".bundle", ".aws", ".codex", ".agents"}
PRIVATE_NAMES = {"CLAUDE.md", "PROJECT_MEMORY.md"}
SITE_ONLY_PARTS = {"forum-service", "supabase", "scripts", "design-system", "content-plan", ".github", "vendor"}
SITE_ONLY_NAMES = {"Gemfile", "Gemfile.lock", "README.md", "SECURITY.md", "blog-post-template.md"}
PATTERNS = {
    "private key": re.compile(rb"-----BEGIN (?:RSA |EC |OPENSSH |DSA |ENCRYPTED )?PRIVATE KEY-----"),
    "GitHub token": re.compile(rb"\b(?:gh[pousr]_[A-Za-z0-9]{36,}|github_pat_[A-Za-z0-9_]{40,})\b"),
    "Supabase secret key": re.compile(rb"\bsb_secret_[A-Za-z0-9_-]{20,}\b"),
    "AWS access key": re.compile(rb"\b(?:AKIA|ASIA)[A-Z0-9]{16}\b"),
}
JWT = re.compile(rb"\beyJ[A-Za-z0-9_-]+\.([A-Za-z0-9_-]+)\.[A-Za-z0-9_-]+\b")


def path_problem(path, site=False):
    parts = path.parts
    if any(part in PRIVATE_PARTS for part in parts) or path.name in PRIVATE_NAMES:
        return "private authoring or configuration file"
    if any(parts[i:i + 2] == ("docs", "ai") for i in range(len(parts) - 1)):
        return "private AI records"
    if path.name.startswith(".env") and path.name not in {".env.example", ".env.template"}:
        return "environment file"
    if path.suffix.lower() in {".pem", ".key", ".sqlite", ".sqlite3", ".db"}:
        return "credential or database file"
    if site and (any(part in SITE_ONLY_PARTS for part in parts) or path.name in SITE_ONLY_NAMES):
        return "backend or development file in published output"
    if site and path.name in {".env.example", ".env.template"}:
        return "environment template in published output"
    return None


def credential_categories(data):
    categories = [name for name, pattern in PATTERNS.items() if pattern.search(data)]
    for token in JWT.finditer(data):
        try:
            payload = token.group(1)
            claims = json.loads(base64.urlsafe_b64decode(payload + b"=" * (-len(payload) % 4)))
            if isinstance(claims, dict) and claims.get("role") == "service_role":
                categories.append("privileged Supabase JWT")
        except (ValueError, UnicodeError):
            continue
    return sorted(set(categories))


def inspect_file(root, relative, site=False):
    problems = []
    reason = path_problem(relative, site)
    if reason:
        problems.append(reason)
    target = root / relative
    if target.is_symlink():
        return problems + ["symlink requires review"]
    if not target.is_file():
        return problems + ["expected a regular file"]
    # Stream even binary assets so a large file cannot hide a private credential.
    with target.open("rb") as stream:
        tail = b""
        while True:
            chunk = stream.read(1024 * 1024)
            if not chunk:
                break
            data = tail + chunk
            problems.extend(credential_categories(data))
            tail = data[-16384:]
    return sorted(set(problems))


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--site", type=Path, help="also inspect the generated Jekyll directory")
    options = parser.parse_args()
    root = Path(__file__).resolve().parent.parent
    tracked = subprocess.check_output(["git", "ls-files", "-z"], cwd=root).decode().split("\0")
    findings = []
    for name in filter(None, tracked):
        for problem in inspect_file(root, Path(name)):
            findings.append(f"source/{name}: {problem}")
    if options.site is not None:
        site = options.site.resolve()
        if not site.is_dir() or not (site / "index.html").is_file():
            findings.append("site: missing generated directory or homepage")
        else:
            for target in site.rglob("*"):
                relative = target.relative_to(site)
                if target.is_symlink() or target.is_file():
                    for problem in inspect_file(site, relative, site=True):
                        findings.append(f"site/{relative}: {problem}")
                elif path_problem(relative, site=True):
                    findings.append(f"site/{relative}: private or development directory")
    if findings:
        print("Publication blocked:", file=sys.stderr)
        for finding in findings:
            print(f"  {finding}", file=sys.stderr)
        return 1
    print("Publication safety checks passed" + (" for source and generated site." if options.site else " for tracked source."))
    return 0


if __name__ == "__main__":
    sys.exit(main())
