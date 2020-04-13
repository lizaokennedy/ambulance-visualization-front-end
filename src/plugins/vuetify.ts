import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#FFFFFF',
        secondary: '#cddc39',
        accent: '#03a9f4',
        error: '#e91e63',
        warning: '#ffc107',
        info: '#ff5722',
        success: ' #4caf50'

      },
      dark: {
        primary: '#FFFFFF',
        secondary: '#cddc39',
        accent: '#03a9f4',
        error: '#e91e63',
        warning: '#ffc107',
        info: '#ff5722',
        success: ' #4caf50'
      }
    }
  }
})
