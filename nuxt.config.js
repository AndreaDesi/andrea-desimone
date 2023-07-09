import smConfig from "./sm.json";
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  ssr: false,
  loading: false,
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
  head() {
    return {
      title: "Home",
      htmlAttrs: {
        lang: "it",
      },
      titleTemplate: "%s - " + "Andrea De Simone",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
        {
          rel: "shortcut icon",
          href: "/favicon.ico",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "mask-icon",
          href: "/safari-pinned-tab.svg",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          name: "description",
          content:
            "Ciao! I’m Andrea De Simone, a communication designer based in Italy and I’m currently attending the last year of Master degree in Communication Design at Politecnico di Milano.",
        },
        {
          name: "image",
          content: "",
        },
        // Twitter
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        { hid: "twitter:site", name: "twitter:site", content: "Andrea De Simone" },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: "https://andreadesimone.info/",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Andrea De Simone",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "Ciao! I’m Andrea De Simone, a communication designer based in Italy and I’m currently attending the last year of Master degree in Communication Design at Politecnico di Milano.",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "",
        },

        // Open Graph
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: "Andrea De Simone",
        },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://andreadesimone.info/",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Andrea De Simone",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "Ciao! I’m Andrea De Simone, a communication designer based in Italy and I’m currently attending the last year of Master degree in Communication Design at Politecnico di Milano.Un'azienda vinicola che ricerca nella produzione di franciacorta l'espressione autentica del territorio.",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "",
        },
        {
          hid: "og:image:secure_url",
          property: "og:image:secure_url",
          content: "",
        },
        {
          hid: "og:image:alt",
          property: "og:image:alt",
          content: "Andrea De Simone Logo",
        },
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
}