import { buildProps } from '@capybara-ui/utils'
import { ExtractPropTypes } from 'vue'
import '../styles/index'

// mask props
export const maskProps = buildProps({
  /**
   * @description Whether to show the mask
   */
  show: {
    type: Boolean,
    default: true,
  },
})

// mask emits
export const maskEmits = {
  click: (e: MouseEvent) => e instanceof MouseEvent,
  ['update:visibility']: (e: boolean) => typeof e == 'boolean',
}

// typescript mask props
export type MaskProps = ExtractPropTypes<typeof maskProps>
// typescript mask emits
export type MaskEmits = ExtractPropTypes<typeof maskEmits>
