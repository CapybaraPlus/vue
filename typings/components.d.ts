import { RaButton } from '@capybara-plus/components'
import '@vue/runtime-core'

export {}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    RaButton: typeof RaButton
  }
}
