# Portable Format

Portent is a specification, not a single application.

A compliant implementation should make the object model available in a portable form.

## Minimum Object Shape

At minimum, an object needs:

- a stable identifier or path
- a title
- a type
- readable content
- explicit relationships

Markdown with YAML frontmatter is the most direct representation:

```markdown
---
type: Responsibility
related_to:
  - "[[Personal health]]"
---

# Maintain Personal Health

Maintain long-running health outcomes through training, recovery, and regular measurement.
```

## Portent Lite

Portent Lite is enough for many tools:

- title
- type
- body
- `belongs_to`
- `related_to`

## Portent Core

Portent Core adds fields many systems need:

- aliases
- created and updated timestamps
- source or provenance
- external URLs
- tags
- optional owner or author fields

## Portent Full

Portent Full adds stronger behavior:

- validation
- type templates
- typed relationship fields
- graph views
- inbox processing
- import and export
- conformance tests

Tolaria is expected to implement the richest profile first, but Portent should remain useful even where only Lite is possible.
