# Example: Meeting Event

A meeting is a good test case for Portent because folders handle it poorly.

Should it go in meetings, the project folder, the customer folder, or the topic folder?

In Portent, the answer is: model the event once, then render it wherever it is useful.

```yaml
---
type: Event
belongs_to: "[[Launch Portent v0.1]]"
related_to:
  - "[[Alice Example]]"
  - "[[Knowledge graph design]]"
  - "[[Portent relationships]]"
date: 2026-05-16
---

# Meeting With Alice About Portent Relationships

Discussed why Portent should keep `belongs_to` and `related_to` as default relationships while allowing implementations to define more specific fields.

## Decisions

- Keep the core relationship vocabulary small.
- Treat folders as optional views, not as the model.
- Make capture and organization separate concepts in the spec.

## Follow-Up

- Draft the relationships page.
- Add examples showing one event rendered through multiple views.
```

This one object can appear in:

- the `Launch Portent v0.1` project
- Alice's person page
- a timeline for May 16, 2026
- the `Knowledge graph design` topic
- a relationship neighborhood around `Portent relationships`
