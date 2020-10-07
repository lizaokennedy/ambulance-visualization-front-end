import vuetify from './plugins/vuetify'
import i18n from './i18n'
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import AsyncComputed from 'vue-async-computed'

Vue.config.productionTip = false

require('./assets/styles/app.css')

Vue.use(AsyncComputed)

new Vue({
  vuetify,
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
