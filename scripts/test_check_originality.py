import unittest

from check_originality import find_repeats


class EditorialRepetitionTests(unittest.TestCase):
    def test_shared_prose_is_reported_across_whitespace_variants(self):
        paragraph = " ".join(f"word{n}" for n in range(60))
        result = find_repeats({"one.md": paragraph, "two.md": paragraph.replace(" ", "\n", 3)})
        self.assertEqual(len(result), 1)
        self.assertEqual(result[0]["files"], ["one.md", "two.md"])

    def test_source_notes_quotes_and_code_do_not_become_editorial_matches(self):
        text = " ".join(f"word{n}" for n in range(60))
        for wrapped in ["> " + text, "<div>" + text + "</div>", "*Source reviewed: " + text + "*", "```\n" + text + "\n```"]:
            self.assertEqual(find_repeats({"one.md": wrapped, "two.md": wrapped}), [])

    def test_distinct_technical_examples_are_not_conflated(self):
        a = " ".join(f"receipt{n}" for n in range(60))
        b = " ".join(f"attendance{n}" for n in range(60))
        self.assertEqual(find_repeats({"one.md": a, "two.md": b}), [])
