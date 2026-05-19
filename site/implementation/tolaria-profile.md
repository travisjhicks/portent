# Tolaria Profile

Tolaria is the first intended implementation of Portent.

The Tolaria profile should make Portent easy to use without making the spec depend on Tolaria internals.

The fastest starting point is the Portent template vault: [refactoringhq/portent-vault-template](https://github.com/refactoringhq/portent-vault-template).

## Expected Behavior

Tolaria should support:

- one Markdown file per object
- YAML frontmatter for type, lifecycle metadata, and relationships
- wikilinks as relationship values for local graph references
- type documents for templates and display settings
- an inbox for captured but unorganized material
- relationship-aware navigation
- views derived from type and relationship metadata

## Lifecycle Support

Tolaria supports the Portent lifecycle directly:

- the Inbox shows captured notes that have not been organized yet
- organizing a note stores lifecycle metadata that marks it ready for normal views
- archiving hides old or obsolete notes from default sections

This makes the capture -> organize -> archive workflow a normal part of operating the vault, not just a naming convention.

## File-Based Graph

Tolaria's local-first Markdown model is a natural fit for Portent.

Plain files make the graph inspectable, versionable, portable, and understandable by AI agents. A user should be able to leave Tolaria and still keep the knowledge model.

## Not The Whole Spec

The Tolaria profile can provide richer defaults, but it should not define the entire standard.

Other implementations may use JSON, SQLite, a hosted database, static site generation, or another storage layer as long as they preserve the object types and relationship semantics.

## Multiple Vaults

Portent can use the same type system for both life and work without forcing the same access boundary.

Tolaria can mount multiple vaults together, so a personal vault and a team vault can share the Portent model while keeping their files, permissions, and collaboration rules separate.
