import { buildProps, definePropType } from '@capybara-plus/utils'
import type { ExtractPropTypes } from 'vue'

// props
export const rippleProps = buildProps({
  /**
   * @description parent element
   */
  parent: {
    type: definePropType<HTMLElement>(Object),
    required: true,
  },
  /**
   * @description mouse event
   */
  event: {
    type: definePropType<MouseEvent>(Object),
    required: true,
  },
  /**
   * @description unmount component
   */
  unmount: {
    type: definePropType<() => void>(Function),
    required: true,
  },
  /**
   * @description custom color
   */
  color: String,
})

// typescript props
export type RippleProps = ExtractPropTypes<typeof rippleProps>
