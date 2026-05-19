import { defineConfig } from "vitepress";

const base = process.env.VITEPRESS_BASE ?? "/";

export default defineConfig({
  title: "Portent",
  description: "An open specification for portable knowledge base systems.",
  base,
  cleanUrls: true,
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/brand/portent-icon.svg" }],
    ["meta", { property: "og:title", content: "Portent" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "Portent is an open specification for modeling knowledge with typed objects, explicit relationships, and a simple lifecycle.",
      },
    ],
  ],
  themeConfig: {
    logo: {
      light: "/brand/portent-wordmark.svg",
      dark: "/brand/portent-wordmark-dark.svg",
      alt: "Portent",
    },
    siteTitle: false,
    nav: [
      { text: "Start Here", link: "/start-here" },
      { text: "Types", link: "/types" },
      { text: "Relationships", link: "/relationships" },
      { text: "Lifecycle", link: "/lifecycle" },
      { text: "Implementation", link: "/implementation/portable-format" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/refactoringhq/portent" },
    ],
    search: {
      provider: "local",
    },
    sidebar: [
      {
        text: "Start Here",
        items: [
          { text: "Manifesto", link: "/start-here" },
          { text: "Agent One-Pager", link: "/agent-one-pager" },
        ],
      },
      {
        text: "Types",
        items: [
          { text: "PORT vs ENTP Types", link: "/types#port-vs-entp-types" },
          { text: "Project", link: "/types#project" },
          { text: "Operation", link: "/types#operation" },
          { text: "Responsibility", link: "/types#responsibility" },
          { text: "Task", link: "/types#task" },
          { text: "Event", link: "/types#event" },
          { text: "Note", link: "/types#note" },
          { text: "Topic", link: "/types#topic" },
          { text: "Person", link: "/types#person" },
        ],
      },
      {
        text: "Relationships",
        items: [
          { text: "Belongs To", link: "/relationships#belongs-to" },
          { text: "Related To", link: "/relationships#related-to" },
        ],
      },
      {
        text: "Lifecycle",
        items: [
          { text: "Capture", link: "/lifecycle#capture" },
          { text: "Organize", link: "/lifecycle#organize" },
          { text: "Archive", link: "/lifecycle#archive" },
        ],
      },
      {
        text: "Implementation",
        items: [
          { text: "Portable Format", link: "/implementation/portable-format" },
          { text: "Extending Portent", link: "/implementation/extending-portent" },
          { text: "Tolaria Profile", link: "/implementation/tolaria-profile" },
        ],
      },
    ],
    footer: {
      message: "An open vocabulary for portable knowledge systems.",
      copyright: "Released under the MIT license.",
    },
    outline: {
      level: [2, 3],
    },
  },
});
