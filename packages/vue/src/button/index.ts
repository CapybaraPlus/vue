import Button from './src/button.vue'
import { withInstall } from '@capybara-plus/utils'

export const RaButton = withInstall(Button) // global registration include import on demand
export default RaButton // partial registration

export * from './src/button'
