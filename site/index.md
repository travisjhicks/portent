---
layout: home
title: Portent
titleTemplate: false

hero:
  text: An open spec for work & personal knowledge bases
  tagline: "An opinionated set of types, relationships, and lifecycle states."
  actions:
    - theme: brand
      text: Start Here
      link: /start-here
    - theme: alt
      text: Copy Template
      link: https://github.com/refactoringhq/portent-vault-template
---

<div class="home-feature-sections">
  <section class="home-feature-section">
    <div class="home-feature-copy">
      <p class="home-feature-eyebrow">Types</p>
      <h2>Eight defaults for real-life knowledge</h2>
      <p>
        Portent starts with a small, opinionated type system so you can stop
        inventing categories from scratch.
      </p>
      <p>
        PORT types describe actionable work: Projects, Operations,
        Responsibilities, and Tasks. ENTP types describe context and memory:
        Events, Notes, Topics, and People.
      </p>
      <a class="home-feature-link" href="/types">Explore types</a>
    </div>
    <figure class="home-feature-media">
      <img src="/home/portent-types.webp" alt="PORT and ENTP type groups in Portent">
    </figure>
  </section>

  <section class="home-feature-section home-feature-section--reverse">
    <div class="home-feature-copy">
      <p class="home-feature-eyebrow">Relationships</p>
      <h2>Connect things by how they are useful</h2>
      <p>
        Portent models knowledge as a graph. Instead of choosing one folder,
        you connect each item to things that explain why it matters.
      </p>
      <p>
        The default relationships are deliberately simple. Use belongs_to for
        ownership and related_to for looser context, then add more specific
        ones only when your system needs them.
      </p>
      <a class="home-feature-link" href="/relationships">Explore relationships</a>
    </div>
    <figure class="home-feature-media">
      <img src="/home/portent-relationships.png" alt="Belongs to and related to relationships between Portent types">
    </figure>
  </section>

  <section class="home-feature-section">
    <div class="home-feature-copy">
      <p class="home-feature-eyebrow">Lifecycle</p>
      <h2>Keep capture separate from organization</h2>
      <p>
        Portent treats every piece of information as moving through a simple
        lifecycle. Capture first so nothing is lost, organize when you can say
        what it is and what it is useful for, archive when it has served its
        purpose.
      </p>
      <p>
        This keeps the workspace clean without making capture expensive.
      </p>
      <a class="home-feature-link" href="/lifecycle">Explore lifecycle</a>
    </div>
    <figure class="home-feature-media">
      <img src="/home/portent-lifecycle.png" alt="Capture, organize, and archive lifecycle steps">
    </figure>
  </section>
</div>
