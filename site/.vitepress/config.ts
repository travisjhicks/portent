import { defineConfig } from "vitepress";

const base = process.env.VITEPRESS_BASE ?? "/";

export default defineConfig({
  title: "Portent",
  description: "An open specification for portable knowledge base systems.",
  base,
  cleanUrls: true,
  head: [
    ["meta", { property: "og:title", content: "Portent" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "Portent is an open specification for modeling knowledge with typed objects, explicit relationships, and portable views.",
      },
    ],
  ],
  themeConfig: {
    nav: [
      { text: "Manifesto", link: "/manifesto" },
      { text: "Principles", link: "/principles" },
      { text: "Spec", link: "/spec/types" },
      { text: "Implementation", link: "/implementation/portable-format" },
      { text: "Examples", link: "/examples/overview" },
    ],
    search: {
      provider: "local",
    },
    sidebar: [
      {
        text: "Start Here",
        items: [
          { text: "Manifesto", link: "/manifesto" },
          { text: "Principles", link: "/principles" },
        ],
      },
      {
        text: "Specification",
        items: [
          { text: "Object Types", link: "/spec/types" },
          { text: "Relationships", link: "/spec/relationships" },
          { text: "Lifecycle", link: "/spec/capture-and-organization" },
          { text: "Views", link: "/spec/views" },
        ],
      },
      {
        text: "Implementation",
        items: [
          { text: "Portable Format", link: "/implementation/portable-format" },
          { text: "Tolaria Profile", link: "/implementation/tolaria-profile" },
        ],
      },
      {
        text: "Examples",
        items: [
          { text: "Overview", link: "/examples/overview" },
          { text: "Health Responsibility", link: "/examples/health-responsibility" },
          { text: "Meeting Event", link: "/examples/meeting-event" },
        ],
      },
    ],
    footer: {
      message: "An open vocabulary for portable knowledge systems.",
      copyright: "Released under the MIT license.",
    },
  },
});
