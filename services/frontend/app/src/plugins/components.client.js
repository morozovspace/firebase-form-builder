import Vue from 'vue'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

const components = {}

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})