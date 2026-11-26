"""Find repeated long prose for editorial review, not an originality or GEO score.

By default report the library without failing on historic issues. With --strict and
explicit post paths, reject long paragraphs those posts share across three or more
articles. Two-article matches remain editorial review prompts.
"""
import argparse
from collections import defaultdict
import hashlib
import json
from pathlib import Path
import re


def prose_paragraphs(source):
    body = re.split(r"\n---\s*\n", source.replace("\r\n", "\n"), maxsplit=1)[-1]
    body = re.sub(r"```[\s\S]*?```", "", body)
    for paragraph in re.split(r"\n\s*\n", body):
        text = " ".join(paragraph.split())
        # Exclude headings, lists, quotes, tables and italic source-review notes.
        if re.match(r"^(?:#|>|<|\||[-*] |\d+\. |\*(?!\*))", text):
            continue
        if len(text.split()) >= 45:
            yield text


def find_repeats(files):
    occurrences = defaultdict(set)
    for path, source in files.items():
        for paragraph in prose_paragraphs(source):
            occurrences[paragraph].add(path)
    return [
        {"id": hashlib.sha256(text.encode()).hexdigest()[:12], "words": len(text.split()),
         "preview": text[:140], "files": sorted(paths)}
        for text, paths in sorted(occurrences.items()) if len(paths) > 1
    ]


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--strict", action="store_true")
    parser.add_argument("--json", action="store_true")
    parser.add_argument("posts", nargs="*")
    args = parser.parse_args()
    if args.strict and not args.posts:
        parser.error("--strict requires explicit post paths")
    files = {str(p): p.read_text() for p in sorted(Path("_posts").glob("*.md"))}
    unknown = set(args.posts) - set(files)
    if unknown:
        parser.error("Unknown post paths: " + ", ".join(sorted(unknown)))
    repeated = find_repeats(files)
    focus = set(args.posts)
    selected = [r for r in repeated if not focus or focus.intersection(r["files"])]
    result = {"scope": "Exact repeated prose of at least 45 words; manual review still required",
              "articles": len(files), "repeated_blocks": selected}
    if args.json:
        print(json.dumps(result, indent=2))
    else:
        print(f"Reviewed {len(files)} articles; {len(selected)} repeated prose blocks for editorial review.")
        for row in selected:
            print(f"{row['id']} ({row['words']} words): " + ", ".join(row['files']))
    return 1 if args.strict and any(len(row["files"]) >= 3 for row in selected) else 0


if __name__ == "__main__":
    raise SystemExit(main())
