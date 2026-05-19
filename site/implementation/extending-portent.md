# Extending Portent

Portent is meant to be small, but not closed.

The default type system, relationships, and lifecycle should cover most common knowledge bases. When they do not, extend Portent only after the default model fails in a concrete situation.

## Create new Types...

Common extensions include:

- **Calendar types**: years, quarters, months, or weeks used to anchor projects, events, and reviews.
- **Teams or areas**: broader ownership domains that group PORT items.
- **Note subtypes**: articles, videos, resources, evergreen notes, essays, interviews, or other specialized artifacts.
- **Specialized relationships**: more precise links that disambiguate the default `belongs_to` and `related_to` fields.
- **Domain types**: concepts that belong to a specific workflow, such as podcast interviews, research studies, customer accounts, or incidents.

## ...but use Properties first

Not every distinction needs a new root type.

For example, a video, article, and checklist can often remain `Note` objects with a `kind` or `format` property. Create a new type when the object needs different behavior, templates, relationships, or views.

## Defaults before new Relationships

Start with `belongs_to` and `related_to`.

Add a custom relationship only when the default names hide important meaning.
