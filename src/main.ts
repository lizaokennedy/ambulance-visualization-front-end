import i18n from './i18n'
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//   let lang: string = to.params.lang
//   if (!lang) {
//     lang = 'en'
//   }
//   i18n.locale = lang
//   next()
// })
require('./assets/styles/app.css')
new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
