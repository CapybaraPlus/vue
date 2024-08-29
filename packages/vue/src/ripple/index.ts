import './style'
import useRipple from './src/function'
import Ripple from './src/ripple.vue'
import { buildInstance, withInstallFunction } from '@capybara-plus/utils'

export const RaRipple = withInstallFunction(useRipple, 'useRaRipple')
export default RaRipple

export * from './src/instance'

export type RaRippleInstance = buildInstance<typeof Ripple>
