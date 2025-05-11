/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#211f20", 
          secondary: "#646569",
          gold: "#dbc979",
          gold_light: "#e3d4a8",
          green: "#b1b27b",
          orange: "#be8046",
        },
      },
    },
  },
})
