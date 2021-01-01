const path = require('path')
export default { 
  title: process.env.PWA_OG_TITLE || "PWA_OG_TITLE",
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      name: 'msapplication-TileColor',
      content: '#2b2b2b'
    },
    {
      name: 'theme-color',
      content: '#2b2b2b'
    },
  ],
  script: [
    {
      src: "https://unpkg.com/focus-visible"
    }
  ],
  link: [
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Heebo:100,300,400,500,700,800,900" },
  ],
}