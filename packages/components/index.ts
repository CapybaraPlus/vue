import { App } from 'vue'
import Button from './src/button/button.vue'
import ColorDisplay from './src/color-display/color-display.vue'

export default {
  install(app: App) {
    app.component('RaButton', Button)
    app.component('RaColorDisplay', ColorDisplay)
  },
}
