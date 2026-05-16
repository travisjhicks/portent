# Views

Views are filters over the model.

They should be derived from types, relationships, metadata, and content rather than being treated as the source of truth.

## Common Views

A Portent-compatible tool can render many views from the same objects:

- project dashboards
- responsibility reviews
- people pages
- topic maps
- event timelines
- operation checklists
- task lists
- graph neighborhoods
- inbox queues

The same event can appear on a timeline, in a project dashboard, on a person page, and in a topic map without being duplicated.

## Views Should Preserve Meaning

Views are allowed to be opinionated. A tool may choose the best default view for a project, person, topic, or responsibility.

But the view should not be the only place where the meaning exists. If a meeting appears under a project only because it is in a project folder, the relationship is fragile. If the meeting explicitly belongs to the project, any tool can render it correctly.

## Folders Are Not The Model

Portent does not forbid folders.

Folders can be useful for compatibility, export, media grouping, or simple browsing. They become a problem when folder location is treated as the only semantic model.

In Portent, views are generated from the graph. Folders may reflect that graph when useful, but they should not replace it.
