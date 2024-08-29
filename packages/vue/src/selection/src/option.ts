import { buildProps } from '@capybara-plus/utils'
import { ExtractPropTypes } from 'vue'

// option props
export const optionProps = buildProps({
  /**
   * @description option label
   */
  label: String,
  /**
   * @description option value
   */
  value: [Object, String, Number],
  /**
   * @description whether the option is disabled
   */
  disabled: Boolean,
  /**
   * @description html tabindex
   */
  tabindex: {
    type: [String, Number],
    default: 0,
  },
})

// option props type
export type OptionProps = ExtractPropTypes<typeof optionProps>
