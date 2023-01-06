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
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css3?family=Poppins",
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
