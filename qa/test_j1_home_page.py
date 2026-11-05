import re
import unittest
from html.parser import HTMLParser
from pathlib import Path

SITE = Path(__file__).resolve().parents[1] / "site"
INDEX = SITE / "index.html"
STYLES = SITE / "styles.css"


class Node:
    def __init__(self, tag, attrs, parent=None):
        self.tag = tag
        self.attrs = dict(attrs)
        self.parent = parent
        self.children = []

    @property
    def cls(self):
        return (self.attrs.get("class") or "").split()

    def find(self, tag=None, cls=None, id_=None, **attrs):
        out = []
        for child in self.children:
            if ((tag is None or child.tag == tag)
                    and (cls is None or cls in child.cls)
                    and (id_ is None or child.attrs.get("id") == id_)
                    and all(child.attrs.get(k) == v for k, v in attrs.items())):
                out.append(child)
            out.extend(child.find(tag, cls, id_, **attrs))
        return out

    def text(self):
        parts = []
        for child in self.children:
            if child.tag == "#text":
                parts.append(child.attrs["data"])
            else:
                parts.append(child.text())
        return " ".join(" ".join(parts).split())


class Tree(HTMLParser):
    VOID = {"area", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "wbr"}

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = Node("#root", [])
        self.stack = [self.root]

    def handle_starttag(self, tag, attrs):
        node = Node(tag, attrs, self.stack[-1])
        self.stack[-1].children.append(node)
        if tag not in self.VOID:
            self.stack.append(node)

    def handle_endtag(self, tag):
        for i in range(len(self.stack) - 1, 0, -1):
            if self.stack[i].tag == tag:
                del self.stack[i:]
                break

    def handle_data(self, data):
        if data.strip():
            self.stack[-1].children.append(Node("#text", {"data": data}))

    def close(self):
        super().close()
        while len(self.stack) > 1:
            self.stack.pop()


def tree():
    t = Tree()
    t.feed(INDEX.read_text(encoding="utf-8"))
    t.close()
    return t.root


class J1Home(unittest.TestCase):
    """J1: a visitor understands what Corridor Route is, who it is for, and the
    research it is built on, before using it, on a phone without sideways scroll.
    """

    @classmethod
    def setUpClass(cls):
        cls.root = tree()
        cls.css = STYLES.read_text(encoding="utf-8")

    # --- the exact elements each criterion names ---

    def test_h1_names_the_product_promise(self):
        h1s = self.root.find("h1")
        self.assertEqual(len(h1s), 1)
        text = h1s[0].text().lower()
        self.assertIn("tanker trip", text)
        self.assertIn("djibouti", text)
        self.assertIn("ethiopia", text)

    def test_lede_states_status_and_audience(self):
        lede = self.root.find(cls="lede")
        self.assertEqual(len(lede), 1)
        text = lede[0].text().lower()
        self.assertIn("working prototype", text)
        self.assertIn("logistics", text)
        self.assertIn("real estate", text)
        self.assertIn("ethiopia", text)

    def test_research_claim_names_startuptribunal_and_pipeline(self):
        prose = self.root.find(cls="prose")
        claim = [p for p in prose if "petroleum pipeline" in p.text().lower()]
        self.assertTrue(claim, "no prose element carries the pipeline claim")
        text = claim[0].text().lower()
        self.assertIn("startuptribunal", text)
        self.assertIn("petroleum pipeline", text)
        self.assertIn("djibouti", text)

    def test_caveat_states_rejected_status(self):
        caveats = self.root.find(cls="caveat")
        self.assertTrue(caveats, "no caveat element found")
        self.assertTrue(
            any("rejected" in c.text().lower() for c in caveats),
            "no caveat states the rejected research status",
        )

    def test_no_fixed_widths_that_force_sideways_scroll_on_phone(self):
        """Phone: no element has a fixed min-width larger than a 375px viewport.

        min-width declarations inside @media (min-width: ...) rules are query
        conditions, not element constraints, so they are excluded.
        """
        css = re.sub(r"@media[^{]+\{[^{}]*\}", "", self.css)
        css = re.sub(r"@media[^{]+\{(?:[^{}]*|\{[^{}]*\})*\}", "", css)
        widths = re.findall(r"min-width\s*:\s*(\d+)px", css)
        for w in widths:
            self.assertLessEqual(int(w), 375, f"min-width {w}px exceeds phone viewport")

    def test_desktop_content_reaches_960px(self):
        """Desktop: the content container spans at least 960px on the 12-column grid."""
        self.assertIn("--content-max: 1120px", self.css)
        self.assertIn("@media (min-width: 960px)", self.css)


if __name__ == "__main__":
    unittest.main()
