# Type System

The Portent type system defines eight core object types.

The names are intentionally ordinary. A portable knowledge model should not require a private ontology before it becomes useful.

These types are defaults. They are meant to cover the common shape of personal and organizational knowledge with almost no setup. You should be able to look at a piece of information and usually decide whether it is a project, operation, responsibility, task, event, note, topic, or person.

Implementations may add custom types, but Portent-compatible tools should make the default set easy to use first.

The type system is the first pillar of Portent. It answers the question: what is this?

## Project

A **Project** is a bounded effort that produces an output.

Projects usually:

- have a beginning and an end
- cannot be completed in one sitting
- have success criteria
- have a timeline or deadline
- advance one or more responsibilities

Example: "Launch Portent v0.1 website by the end of the quarter."

## Responsibility

A **Responsibility** is a long-running area of accountability.

Responsibilities usually:

- do not have a natural end date
- describe outcomes rather than outputs
- have measurable indicators or KPIs
- are maintained or improved over time

Example: "Maintain personal health," measured by resting heart rate, VO2 max, weekly training volume, and sleep consistency.

## Operation

An **Operation** is recurring work that can usually be completed in one sitting.

Operations usually belong to a responsibility, but can also support a project.

Example: "Weekly training review" belongs to "Maintain personal health."

## Task

A **Task** is one-off work that can usually be completed in one sitting.

Tasks are part of the Portent worldview, but they do not need to live inside the knowledge base. A team may keep tasks in Todoist, Linear, GitHub Issues, or another dedicated system while still relating them to Portent projects and responsibilities.

Example: "Book a padel court for Tuesday."

## Event

An **Event** is something that happened and should be retained in long-term memory.

Events can include meetings, conversations, decisions, achievements, incidents, personal moments, or external changes.

Example: "Meeting with Alice about the Portent vocabulary."

## Note

A **Note** is a durable knowledge artifact.

It can be a document, resource, reference, tool, decision record, research summary, checklist, or any material that helps advance or understand another object.

Example: "Why folders conflate model and view."

## Topic

A **Topic** is an area of interest or conceptual lens.

Topics do not imply performance expectations. They collect knowledge without requiring ownership, completion, or measurable progress.

Example: "Knowledge graphs."

## Person

A **Person** is a real-world person or, where useful, an AI agent treated as an actor in the system.

People can be contacts, collaborators, customers, vendors, authors, attendees, decision makers, or stakeholders.

Example: "Ada Lovelace."
