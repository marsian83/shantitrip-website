// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "ShantiTrip Holidays",
      meta: [
        {
          name: "description",
          content:
            "We are a young startup based in Himachal Pradesh, passionate about designing personalized trips and curating niche experiences",
        },
      ],
      link: [
        { rel: "icon", type: "image/ico", href: "/favicon.ico" }, //favicon
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous"
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
        },
        {
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
          rel: "stylesheet",
        },
      ],
    },
  },
  css: ["@/assets/css/index.css", "@/assets/css/globals.css"],
  runtimeConfig: {},
});
