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
      <span class="home-feature-chip">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="3" width="7" height="7" rx="1.5"></rect>
          <rect x="14" y="3" width="7" height="7" rx="1.5"></rect>
          <rect x="3" y="14" width="7" height="7" rx="1.5"></rect>
          <rect x="14" y="14" width="7" height="7" rx="1.5"></rect>
        </svg>
        Types
      </span>
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
      <span class="home-feature-chip">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="6" cy="6" r="3"></circle>
          <circle cx="18" cy="7" r="3"></circle>
          <circle cx="12" cy="18" r="3"></circle>
          <path d="M8.7 7.5 15.3 6.8"></path>
          <path d="m7.7 8.6 3 6.8"></path>
          <path d="m16.4 9.4-3 6.3"></path>
        </svg>
        Relationships
      </span>
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
      <span class="home-feature-chip">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 12a8 8 0 0 1 13.7-5.7"></path>
          <path d="M17 3v4h4"></path>
          <path d="M20 12a8 8 0 0 1-13.7 5.7"></path>
          <path d="M7 21v-4H3"></path>
        </svg>
        Lifecycle
      </span>
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

<section class="home-about-section">
  <div class="home-section-heading">
    <span class="home-feature-chip">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
      </svg>
      Made with care
    </span>
    <h2>Built by <a class="home-luca-link" href="https://x.com/lucaronin">Luca</a>, for Luca</h2>
    <p>
      Portent ideas are extracted from how I use <a href="https://tolaria.md">Tolaria</a>,
      and both are the product of the learnings of 15 years of engineering +
      content creation work.
    </p>
  </div>

  <div class="home-author-card">
    <div class="home-author-image">
      <img src="/home/luca-hello.jpeg" alt="Luca">
    </div>
    <div class="home-author-copy">
      <div class="home-author-heading">
        <h3>Hey, I am Luca</h3>
        <p>Founder &amp; Author of <a href="https://refactoring.fm">Refactoring</a></p>
      </div>
      <p>
        Portent is born from 5 years of full-time writing at Refactoring, 10
        as CTO of a high-growth startup, and my PhD research on database
        models. Along the way, I amassed 10,000 notes on various tools'
        workspaces, learned a lot about knowledge mgmt, productivity, and
        working well with AI.
      </p>
      <div class="home-author-stats">
        <div>
          <strong>5 years</strong>
          <span>full-time writing</span>
        </div>
        <div>
          <strong>10 years</strong>
          <span>startup CTO work</span>
        </div>
        <div>
          <strong>10,000</strong>
          <span>notes across tools</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="home-final-cta">
  <div class="home-final-cta-inner">
    <h2>Stay in the loop.</h2>
    <p>
      Subscribe to the Refactoring newsletter for updates on Portent, Tolaria,
      and behind-the-scenes of building in public.
    </p>
    <a class="home-final-cta-button" href="https://refactoring.fm">Subscribe to Refactoring</a>
    <span>170,000+ engineers already subscribed</span>
  </div>
</section>
