import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#19647e',
        secondary: '#f4d35e',
        accent: '#20b577',
        warning: '#f4d35e',
        success: '#16bac5'
      }
    }
  }

})
