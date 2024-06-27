import { withInstall, buildInstance } from '@capybara-plus/utils'
import Mask from './src/mask.vue'

export const RaMask = withInstall(Mask)
export default RaMask
export type RaMaskInstance = buildInstance<typeof RaMask>

export * from './src/mask.ts'
