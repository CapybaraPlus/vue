import { App, Plugin } from 'vue'
import { RaButton } from './src/button'

export const plugins = [RaButton] as Plugin[]

export default {
  install: (app: App) => {
    plugins.forEach((plugin) => {
      app.use(plugin)
    })
  },
}
