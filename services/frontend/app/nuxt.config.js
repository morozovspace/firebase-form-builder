import pwa from "./config/pwa"
import axios from "./config/axios"
import styleResources from "./config/styles"
import head from "./config/head"
import firebase from "./config/firebase"
import router from "./config/router"

export default {
  target: "static",
  ssr: false,
  srcDir: "src",
  router,
  components: true,
  head,
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
  buildModules: [
    "@nuxtjs/eslint-module",
  ],
  plugins: [
    "~/plugins/components.client",
    "~/plugins/axios",
  ],
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/style-resources",
    "@nuxtjs/svg-sprite",
    "cookie-universal-nuxt",
    "@nuxtjs/firebase",
  ],
  axios,
  pwa,
  styleResources,
  svgSprite: {
    input: "~/assets/svg",
    output: "~/static/icons/",
  },
  firebase, // https://firebase.nuxtjs.org/tutorials/ssr https://vuefire.vuejs.org/vuexfire/
}