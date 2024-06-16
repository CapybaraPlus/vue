import { RaButton } from '@capybara-ui/components'
import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    RaButton: typeof RaButton
  }
}
