# Graph Relationships

Graph relationships explain what an object is useful for.

Portent defines a small default relationship model. Implementations may add more specific relationship names, but they should preserve the distinction between primary and secondary context.

The default relationship model is deliberately small. Most objects need one answer for primary context and several answers for secondary usefulness. `belongs_to` and `related_to` are the conventions that make this possible without designing a custom relationship vocabulary first.

Graph relationships are the second pillar of Portent. They connect objects without forcing the knowledge base into a rigid relational schema.

## Primary Relationship: Belongs To

`belongs_to` is the default primary relationship.

It means the object has a main context or parent. Most objects should have at most one primary parent for a given organizing purpose.

Examples:

- a task belongs to a project
- an operation belongs to a responsibility
- an event belongs to a project
- a note belongs to a responsibility when it is part of that responsibility's operating system

The inverse can be rendered as `has`, `contains`, or `children`.

## Secondary Relationship: Related To

`related_to` is the default secondary relationship.

It means there is useful context without ownership or composition. It is appropriate for many-to-many links.

Examples:

- a meeting event is related to every attendee
- a note is related to multiple topics
- a project is related to the responsibility it is meant to improve
- a person is related to projects they influence

The inverse can be rendered as `referred_by`, `linked_from`, or simply another related item.

## Add Specific Relationships When Needed

Portent does not try to define every possible relationship.

Specific implementations can add relationships such as `authored_by`, `attended_by`, `depends_on`, `blocks`, `documents`, `mentions`, or `supersedes` when the default names would hide important meaning.

The rule is simple: use defaults until precision removes ambiguity.

## Frontmatter Example

```yaml
---
type: Event
belongs_to: "[[Launch Portent v0.1]]"
related_to:
  - "[[Knowledge graphs]]"
  - "[[Alice Example]]"
  - "[[Portent vocabulary]]"
---
```
