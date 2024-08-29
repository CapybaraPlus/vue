import { App as TypeApp, createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import { RaButton } from '@capybara-plus/vue'
import CapybaraPlus from '@capybara-plus/vue'
import CapybaraIcons from '@capybara-plus/icons-vue'

const app: TypeApp = createApp(App)
app.use(CapybaraPlus).use(CapybaraIcons)
app.mount('#app')
