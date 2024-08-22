import { buildInstance, withInstall } from '@capybara-plus/utils'
import Tooltip from './src/tooltip.tsx'

export const RaTooltip = withInstall(Tooltip)
export default RaTooltip

export * from './src/tooltip'

// tooltip instance
export type RaTooltipInstance = buildInstance<typeof RaTooltip>
