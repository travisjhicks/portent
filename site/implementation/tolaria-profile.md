# Tolaria Profile

Tolaria is the first intended implementation of Portent.

The Tolaria profile should make Portent easy to use without making the spec depend on Tolaria internals.

## Expected Behavior

Tolaria should support:

- one Markdown file per object
- YAML frontmatter for type and relationships
- wikilinks for local graph references
- type documents for templates and display settings
- an inbox for captured but unorganized material
- relationship-aware navigation
- views derived from type and relationship metadata

## File-Based Graph

Tolaria's local-first Markdown model is a natural fit for Portent.

Plain files make the graph inspectable, versionable, portable, and understandable by AI agents. A user should be able to leave Tolaria and still keep the knowledge model.

## Not The Whole Spec

The Tolaria profile can provide richer defaults, but it should not define the entire standard.

Other implementations may use JSON, SQLite, a hosted database, static site generation, or another storage layer as long as they preserve the object types and relationship semantics.
