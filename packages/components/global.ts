import { App, Plugin } from 'vue'
import { RaButton } from './src/button'
import { RaLink } from './src/link'
import { RaIcon } from './src/icon'
import { RaTooltip } from './src/tooltip'
import { RaMask } from './src/mask'
import { RaMessage } from './src/message'

export const plugins = [
  RaButton,
  RaLink,
  RaIcon,
  RaTooltip,
  RaMask,
  RaMessage,
] as Plugin[]

export default {
  install: (app: App) => {
    plugins.forEach((plugin) => {
      app.use(plugin)
    })
  },
}
