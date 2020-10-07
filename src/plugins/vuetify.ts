import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#172A3A',
        secondary: '#F6F6F6',
        accent: '#68B0AB',
        error: '#b53055',
        warning: '#4357AD',
        info: '#ff5722',
        success: ' #09BC8A',
        white: 'F6F6F6'
      },
      dark: {
        primary: '#172A3A',
        secondary: '#508991',
        accent: '#b53055',
        error: '#004346',
        warning: '#09BC8A',
        info: '#ff5722',
        success: ' #4caf50'
      }
    }
  }
})
