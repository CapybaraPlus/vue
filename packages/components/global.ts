import { App, Plugin } from 'vue'
import { Button } from './src/button'

const plugins = [Button] as Plugin[]

export default {
  install: (app: App) => {
    plugins.forEach((plugin) => {
      app.use(plugin)
    })
  },
}
