module.exports = {
  "root": true,
  "parserOptions": {
    "parser": "babel-eslint",
    "sourceType": "module",
  },
  "plugins": [
    "promise",
    "prettier"
  ],
  "extends": [
    "@nuxtjs",
    "prettier",
    "prettier/vue",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended",
  ],
  "rules": {
    "semi": "error",
    "prettier/prettier": "error",
    "vue/comment-directive": "off"
  }
}