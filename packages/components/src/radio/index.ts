import { withInstall } from '@capybara-plus/utils'
import Radio from './src/radio.vue'
import RadioGroup from './src/radio-group.vue'
import './styles'

export const RaRadio = withInstall(Radio)
export const RaRadioGroup = withInstall(RadioGroup)
export default RaRadio

export * from './src/radio.ts'
export * from './src/radio-group.ts'
