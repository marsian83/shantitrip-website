var currentDate = new Date();
var dateTime =
  currentDate.getFullYear() +
  "-" +
  (currentDate.getMonth() + 1) +
  "-" +
  (currentDate.getDate() - 2) +
  "T" +
  "00" +
  ":" +
  "00" +
  ":" +
  "00" +
  "+05:30";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  plugins: [{ src: "@/plugins/vercel.ts", mode: "client" }],
  app: {
    head: {
      title: "ShantiTrip Holidays",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "We are a young startup based in Himachal Pradesh, passionate about designing personalized trips and curating niche experiences",
        },
        {
          hid: "google-site-verification",
          name: "google-site-verification",
          content: "Hw5LE2K-QrpSDYoC2u6Hxnol2p5ycVxrKfYDFj1RFn0",
        },
        {
          hid: "og:site_name",
          name: "og:site_name",
          content: "ShantiTrip Holidays",
        },
        { hid: "og:locale", name: "og:locale", content: "en_US" },
        {
          hid: "article:modified_time",
          name: "article:modified_time",
          content: dateTime,
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
          crossorigin: "anonymous",
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
  runtimeConfig: {
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    },
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    adminCredentials: {
      username: process.env.ADMIN_USERNAME,
      password: process.env.ADMIN_PASSWORD,
    },
    DB_CONNECTION_URI: process.env.DATABASE_URL,
  },
});
