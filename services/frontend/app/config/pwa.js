export default {
  icon: false,
  name: "Default name",
  description: "Default description",
  lang: "en",
  meta: {
    ogSiteName: "default sitename", // your website brand
    ogTitle: 'docker-firebase-nuxt-template',
    ogDescription: 'Dockerized firebase and nuxt template for local development with firebase emulators',
    ogHost: 'localhost', // specify the domain that the site is hosted. Required for ogImage.
    ogImage: {
      path: '',
      width: 850,
      height: 450,
      type: "image/png"
    },
    appleStatusBarStyle: "black-translucent",
    theme_color: "red",
  },
  manifest: {
    display: 'fullscreen'
  },
}