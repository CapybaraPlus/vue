import { buildProps } from '@capybara-ui/utils'
import { ExtractPropTypes } from 'vue'

// icon props
export const iconProps = buildProps({
  size: {
    type: [String, Number],
    default: '1em',
  },
  color: {
    type: String,
    default: 'inherit',
  },
} as const)

// typescript icon props
export type IconProps = ExtractPropTypes<typeof iconProps>
