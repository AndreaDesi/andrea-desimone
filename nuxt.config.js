import smConfig from "./sm.json";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  ssr: false,
  loading: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head() {
    return {
      title: "Home",
      htmlAttrs: {
        lang: "it",
      },
      titleTemplate: "%s - " + "Andrea De Simone",
      meta: [
        // ... il resto del tuo codice
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    };
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/style/global.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/prismic"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/prismic"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["@prismicio/vue"],
  },

  prismic: {
    endpoint: smConfig.apiEndpoint,
    modern: true,
    apiOptions: {
      routes: [
        // ... le tue route
      ],
    },
  },
};
