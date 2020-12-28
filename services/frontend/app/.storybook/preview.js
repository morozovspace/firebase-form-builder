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
// color scheme: https://www.growthbunker.dev/vuedarkmode
export const parameters = {
  ...globalParameters,
  backgrounds: {
    default: 'ebony-clay',
    values: [
      {
        name: 'ebony-clay',
        value: '#222C3C'
      },
      {
        name: 'ebony-clay-2',
        value: '#273142',
      },
      {
        name: 'mirage-2',
        value: '#171E29',
      },
      {
        name: 'white',
        value: '#FFFFFF'
      }
    ],
    grid: {
      cellSize: 20,
      opacity: 0.5,
      cellAmount: 5,
      offsetX: 16, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
      offsetY: 16, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
    },
  }, 
}

let currentLocale = 'en';

export const globalTypes = {
  /*
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: currentLocale,
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', right: '🇺🇸', title: 'English' },
        { value: 'ru', right: 'ru', title: 'Russian' },
      ],
    },
  },*/
}

export const decorators = [
  /*
  (_, { globals }) => {
    if (globals.locale !== currentLocale) {
      currentLocale = globals.locale;
    }
    return {
      template: '<story />',
      created () {
        if (this.$i18n) {
          this.$i18n.locale = currentLocale;
        }
      },
      updated () {
        if (this.$i18n) {
          this.$i18n.locale = currentLocale;
        }
      },
    };
  },
  */
];