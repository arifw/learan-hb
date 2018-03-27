require('../node_modules/vuetify/src/stylus/app.styl')

import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VAvatar,
  VSubheader,
  VMenu,
  VSwitch,
  VCard,
  VTextField,
  VProgressLinear,
  transitions
} from 'vuetify'
import { routes } from './routes'
import { storeDef } from './store'
import App from './App.vue'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VAvatar,
    VSubheader,
    VMenu,
    VSwitch,
    VCard,
    VTextField,
    VProgressLinear,
    transitions
  },
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})

Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
  routes,
  mode: 'history'
})

const store = new Vuex.Store(storeDef)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
