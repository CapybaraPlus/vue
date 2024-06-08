import { App, Plugin } from 'vue'
import { RaButton } from './src/button'
import { RaLink } from './src/link'

export const plugins = [RaButton, RaLink] as Plugin[]

export default {
  install: (app: App) => {
    plugins.forEach((plugin) => {
      app.use(plugin)
    })
  },
}
