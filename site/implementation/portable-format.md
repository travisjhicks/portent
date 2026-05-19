# Portable Format

Portent is a specification, not a single application.

A Portent-compatible knowledge base should make the model available in a portable form: objects have types, lifecycle state, readable content, and explicit links to other objects.

The exact storage layer is not important. A tool can use Markdown files, JSON, SQLite, a hosted database, or another format as long as the same concepts remain visible and exportable.

## Object Shape

At minimum, each object needs:

- a stable identifier or path
- a title
- a type
- readable content
- lifecycle metadata
- explicit relationships

The type should use one of the default Portent types unless the knowledge base intentionally extends the model.

## Lifecycle Metadata

Implementations need a way to express whether an object is organized and whether it is archived.

This can be represented with separate fields:

```yaml
organized: true
archived: false
```

Or with a single status field:

```yaml
status: organized
```

The specific property names are up to the implementation. The required behavior is:

- captured objects need triage
- organized objects are ready for ordinary use
- archived objects remain searchable, but are hidden from active surfaces by default

## Relationship Links

Implementations need a way to express relationships and link to other objects.

Portent defines two default relationships:

- `belongs_to` for primary context or ownership
- `related_to` for secondary usefulness

In Markdown, relationship values can use wikilinks:

```yaml
belongs_to: "[[Launch Portent v0.1]]"
related_to:
  - "[[Knowledge graphs]]"
  - "[[Alice Example]]"
```

Other tools can store the same relationships as IDs, URLs, database references, or another stable link format. What matters is that the relationship is explicit and portable.

## Markdown Example

Markdown with YAML frontmatter is the most direct representation:

```markdown
---
type: Responsibility
organized: true
archived: false
related_to:
  - "[[Personal health]]"
---

# Maintain Personal Health

Maintain long-running health outcomes through training, recovery, and regular measurement.
```

Tolaria stores Portent metadata in frontmatter and uses wikilinks as relationship values. Other tools do not need to copy this exact format, but they should preserve the same semantics.
