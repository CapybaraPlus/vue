import { App, Plugin } from 'vue'
import { RaButton } from './button'
import { RaLink } from './link'
import { RaIcon } from './icon'
import { RaTooltip } from './tooltip'
import { RaMask } from './mask'
import { RaMessage } from './message'
import { RaInput } from './input'
import { RaForm, RaFormItem } from './form'
import { RaSelection, RaOption } from './selection'
import { RaRadio, RaRadioGroup } from './radio'

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
  RaSelection,
  RaOption,
  RaRadio,
  RaRadioGroup,
] as Plugin[]

const CapybaraPlus: Plugin = {
  install: (app: App) => {
    plugins.forEach((plugin) => {
      app.use(plugin)
    })
  },
}

export default CapybaraPlus

export * from './button'
export * from './link'
export * from './icon'
export * from './tooltip'
export * from './mask'
export * from './message'
export * from './input'
export * from './form'
export * from './selection'
export * from './radio'
