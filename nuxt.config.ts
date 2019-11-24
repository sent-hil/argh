export default {
  env: {},
  head: {
    title: "argh",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Nuxt.js TypeScript project"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  loading: { color: "#3B8070" },
  build: {},
  buildModules: ["@nuxt/typescript-build", "@nuxtjs/tailwindcss"],
  modules: [],
};
