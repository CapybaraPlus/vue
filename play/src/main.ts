import { App as TypeApp, createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import { RaButton } from '@capybara-plus/components'
import CapybaraUI from '@capybara-plus/components'
import CapybaraIcons from '@capybara-plus/icons-vue'

const app: TypeApp = createApp(App)
app.use(CapybaraUI).use(CapybaraIcons)
app.mount('#app')
