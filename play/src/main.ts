import { App as TypeApp, createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import { RaButton } from '@capybara-ui/components'
import CapybaraUI from '@capybara-ui/components'
import CapybaraIcons from '@capybara-plus/icons-vue'

const app: TypeApp = createApp(App)
app.use(CapybaraUI).use(CapybaraIcons)
app.mount('#app')
