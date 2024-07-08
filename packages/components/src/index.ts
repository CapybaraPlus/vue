import { App, Plugin } from 'vue'
import { RaButton } from './button'
import { RaLink } from './link'
import { RaIcon } from './icon'
import { RaTooltip } from './tooltip'
import { RaMask } from './mask'
import { RaMessage } from './message'
import { RaInput } from './input'
import { RaForm, RaFormItem } from './form'

export const plugins = [
  RaButton,
  RaLink,
  RaIcon,
  RaTooltip,
  RaMask,
  RaMessage,
  RaInput,
  RaForm,
  RaFormItem,
] as Plugin[]

export default {
  install: (app: App) => {
    plugins.forEach((plugin) => {
      app.use(plugin)
    })
  },
}

export * from './button'
export * from './link'
export * from './icon'
export * from './tooltip'
export * from './mask'
export * from './message'
export * from './input'
export * from './form'
