# Three Pillars

Portent is built on three conventions:

1. a type system
2. graph relationships
3. an information lifecycle

Together, they give a knowledge base enough structure to be useful without forcing every person or organization to design a private ontology first.

## Type System

Portent defines eight default types:

- Project
- Operation
- Responsibility
- Task
- Event
- Note
- Topic
- Person

Each type has clear semantics. The point is not just to label information, but to make the label meaningful enough that people and tools know how the object should behave.

The type system is meant to work for both personal life and work. A health goal, a product launch, a recurring review, a meeting, a customer contact, and a research topic should all fit without inventing a new model first.

## Graph Relationships

Portent connects information through generic graph relationships.

The defaults are intentionally broad:

- `belongs_to` for primary context
- `has` as a common inverse of `belongs_to`
- `related_to` for secondary context

These relationships describe the nature of the connection without becoming rigid or overly specific to a particular type pair.

This keeps Portent more flexible than a relational schema while still being structured enough for navigation, views, search, validation, and AI tools. Implementations can add more specific relationships when needed, but the default graph should model most situations.

## Information Lifecycle

Every Portent object moves through three states:

- **captured**: the information has been recorded, but it is not yet actionable
- **organized**: the object has a type and useful relationships, so it can participate in the graph
- **archived**: the object remains part of memory, but should no longer appear in active views by default

The lifecycle separates capture from organization. You can record information quickly, then later decide what it is and what it is useful for.

Archiving keeps the workspace clean without deleting memory.

## Why These Three

The type system answers: what is this?

Relationships answer: what is this useful for?

Lifecycle answers: should this still be active?

Those three questions are enough to make a knowledge base navigable, portable, and understandable by both humans and software.
