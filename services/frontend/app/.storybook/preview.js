import Vue from 'vue'

import * as components from '../.nuxt-storybook/components'
import { prepareForInline } from '../.nuxt-storybook/storybook/nuxt-entry'

import '~storybook';

import { setConsoleOptions } from '@storybook/addon-console'

setConsoleOptions({
  panelExclude: [],
})

Object.keys(components).forEach(name => Vue.component(name, components[name]))

const globalParameters = {}
globalParameters.docs = {
  ...globalParameters.docs,
  prepareForInline,
}

export const parameters = {
  ...globalParameters,
  backgrounds: {
    grid: {
      cellSize: 20,
      opacity: 0.5,
      cellAmount: 5,
      offsetX: 16,
      offsetY: 16,
    },
  }, 
}
let currentTheme = "light"

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: currentTheme,
    toolbar: {
      icon: "circlehollow",
      items: ["light", "dark"],
    },
  },
}

export const decorators = [
  (_, context) => {
    if (context.globals.theme !== currentTheme) {
      currentTheme = context.globals.theme
    }
    return {
      template: "<story />",
      data() {
        return { theme: null }
      },
      mounted () {
        this.theme = currentTheme
        document.body.classList.add(`theme-${this.theme}`)
        document.body.classList.add("theme-bg")
      },
      updated () {
        document.body.classList.remove(`theme-${this.theme}`)
        this.theme = currentTheme
        document.body.classList.add(`theme-${this.theme}`)
      },
    }
  },
]