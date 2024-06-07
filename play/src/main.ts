import { App as TypeApp, createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import { RaButton } from '@capybara-ui/components'
import CapybaraUI from '@capybara-ui/components'

const app: TypeApp = createApp(App)
app.use(CapybaraUI).mount('#app')
