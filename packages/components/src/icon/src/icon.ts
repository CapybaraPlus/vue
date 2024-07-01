import { buildProps } from '@capybara-plus/utils'
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

// icon emits
export const iconEmits = {
  click: (e: MouseEvent) => e instanceof MouseEvent,
}

// typescript icon props
export type IconProps = ExtractPropTypes<typeof iconProps>

// typescript icon emits
export type IconEmits = ExtractPropTypes<typeof iconEmits>
