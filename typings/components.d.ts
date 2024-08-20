import {
  RaButton,
  RaInput,
  RaForm,
  RaFormItem,
} from '@capybara-plus/components'
import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    RaButton: typeof RaButton
    RaInput: typeof RaInput
    RaForm: typeof RaForm
    RaFormItem: typeof RaFormItem
  }
}

export {}
