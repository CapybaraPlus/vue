import { buildProps } from '@capybara-plus/utils'
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
  /**
   * @description after open
   */
  afterOpen: {
    type: Function,
  },
  /**
   * @description before close
   */
  beforeClose: {
    type: Function,
  },
})

// mask emit
export const maskEmit = {
  click: (e: MouseEvent) => e instanceof MouseEvent,
  ['update:visibility']: (e: boolean) => typeof e == 'boolean',
}

// typescript mask props
export type MaskProps = ExtractPropTypes<typeof maskProps>
// typescript mask emits
export type MaskEmits = typeof maskEmit
