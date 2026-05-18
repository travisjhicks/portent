# Principles

Portent is built around a small set of principles. They are more important than any particular app implementation.

## Model Reality First

A knowledge base should describe the real things you are trying to remember, operate, improve, or understand.

Projects, responsibilities, events, topics, people, operations, tasks, and notes are not folders. They are things in the world, or useful records about things in the world.

## Convention Over Configuration

Portent should be useful before it is customized.

It provides default types, default relationships, and a default lifecycle so people can map their real information with very little setup. The defaults are opinionated because an empty modeling system pushes every user to become a taxonomy designer before they can organize anything.

Customization is allowed, but it should come after the defaults fail in a concrete situation.

## Three Pillars

Portent has three pillars: a type system, graph relationships, and an information lifecycle.

The type system answers what something is. Graph relationships explain what it is useful for. Lifecycle state decides whether it needs attention, belongs in active views, or should be retained as archived memory.

## Types And Relationships Before Folders

Portent asks what a thing is before asking where it should appear.

Types name the kind of object you captured. Relationships explain what that object is useful for. Together, they create semantic structure without forcing every item into one location.

## Views Are Not The Model

A calendar is a view. A project dashboard is a view. A person page is a view. A graph is a view.

Portent keeps the model below those views explicit. A single object can appear in many views because it has type and relationships, not because it was copied into many places.

Views are filters over the model. They decide what to show for a purpose, but they should not be the only place where meaning exists.

## Capture, Organize, Archive

Knowledge work has a lifecycle.

Capture makes information available before it is fully understood. Organization makes it actionable by assigning type and relationships. Archiving keeps the active workspace clean when an object has completed its purpose or is no longer useful in ordinary views.

## Organization Should Answer Usefulness

The useful question is not "where do I put this?"

The useful questions are:

- What kind of thing is this?
- What does it advance?
- What does it document?
- What will I need this for?
- Which people, topics, projects, responsibilities, or events make it meaningful?

## Output And Outcome Are Different

Projects and responsibilities are both action-oriented, but they answer different questions.

A **project** is about output. It is a bounded effort to build, ship, change, or complete something.

A **responsibility** is about outcome. It is a long-running area of accountability, usually measured by indicators that should be maintained or improved.

A project can improve a responsibility. It should not replace one.

## Simple Beats Clever

The model should be easy enough to operate by hand and predictable enough for software to validate.

That is why Portent starts with two default relationship families: `belongs_to` for primary context and `related_to` for secondary context. Tools and teams can define more specific relationships when needed, but the base model should remain small.

## Portable Means Plain

Portent should be implementable in Markdown files, databases, local-first apps, static sites, and agent workflows.

The more meaning lives in plain metadata, readable content, stable identifiers, and explicit links, the less it depends on any one vendor or interface.
