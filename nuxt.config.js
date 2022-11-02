import smConfig from "./sm.json";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Andrea De Simone",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
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
        {
          type: "homepage",
          path: "/",
        },
        {
          type: "projects",
          path: "/projects",
        },
        {
          type: "project",
          path: "/projects/:uid",
        },
        {
          type: "category",
          path: "/category/:uid",
        },
        {
          type: "about",
          path: "/about",
        },
      ],
    },
    // htmlSerializer(type, element, content, children) {
    //   switch (type) {
    //     case 'strong':
    //       return /* html */ `<span class="font-medium">${children.join('')}</span>`;
    //       break;

    //     default:
    //       break;
    //   }
    // },
  },
};
