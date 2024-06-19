import { App, Plugin } from 'vue'
import { RaButton } from './src/button'
import { RaLink } from './src/link'
import { RaIcon } from './src/icon'

export const plugins = [RaButton, RaLink, RaIcon] as Plugin[]

export default {
  install: (app: App) => {
    plugins.forEach((plugin) => {
      app.use(plugin)
    })
  },
}
