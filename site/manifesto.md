# The Portent Manifesto

Portent is an open specification for portable knowledge base systems.

It starts from a simple claim: knowledge is best managed as a graph of typed objects and meaningful relationships, not as a hierarchy of folders.

Portent is intentionally opinionated. It gives you defaults before it gives you configuration: common object types, default relationships, and a simple lifecycle. The point is to make the first useful model obvious enough that you can apply it to a company, team, project, or personal life without designing a private ontology from scratch.

Folders force a single location. Knowledge usually has many uses. A meeting can belong to a project, involve several people, mention a topic, create tasks, and become evidence for a long-running responsibility. If the tool asks only "which folder should this go in?", it loses most of that meaning.

Portent changes the organizing question:

- `type`: what is this?
- `belongs_to`: what is its primary context?
- `related_to`: what will make this useful later?

The goal is not to add structure for its own sake. The goal is to make captured information retrievable at the moment it becomes useful.

## The Eight Types

Portent defines eight common object types:

1. **Projects**
2. **Operations**
3. **Responsibilities**
4. **Tasks**
5. **Events**
6. **Notes**
7. **Topics**
8. **People**

These types are meant to be good enough to model most common situations and simple enough to be understood by both humans and software.

They are defaults, not a prison. A tool or team can add more types when necessary, but the Portent bet is that most useful knowledge fits these categories well enough to start.

## Why It Exists

Many knowledge bases conflate two different jobs:

- modeling reality
- creating a view of that model

Folders, notebooks, and spaces are usually views pretending to be models. They make a piece of information live in one place, then expect that place to answer every future retrieval question.

Portent separates the two. The model is made of typed objects and relationships. Views are rendered on top of the model: by project, by responsibility, by person, by topic, by timeline, by owner, by status, by graph neighborhood, or by any other useful lens.

If the model is right, views become cheap.

## Capture First, Organize Later

Portent assumes that capture and organization are separate acts.

You should be able to capture a rough thought, meeting note, task, resource, or draft without deciding its final structure. It becomes organized only when it answers two questions:

1. What is this?
2. What will this be useful for?

In practice, that means an item leaves the inbox when it has a useful type and at least one meaningful primary or secondary relationship.

The point of organization is not tidiness. The point is future retrieval.
