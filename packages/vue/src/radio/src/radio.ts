import { FormSizeValues } from '@capybara-plus/consts'
import {
  buildProps,
  definePropTypeValues,
  isBoolean,
  isNumber,
  isString,
} from '@capybara-plus/utils'
import { ExtractPropTypes } from 'vue'

// props
export const radioProps = buildProps({
  /**
   * @description input name
   */
  name: String,
  /**
   * @description input value
   */
  value: [String, Number, Boolean],
  /**
   * @description label
   */
  label: String,
  /**
   * @description disabled
   */
  disabled: Boolean,
  /**
   * @description size
   */
  size: definePropTypeValues(FormSizeValues, String),
})
// emit
export const radioEmit = {
  'update:modelValue': (val: string | number | boolean | undefined) =>
    isString(val) || isNumber(val) || isBoolean(val),
  change: (val: string | number | boolean | undefined) =>
    isString(val) || isNumber(val) || isBoolean(val),
  mousedown: (event: MouseEvent) => event instanceof MouseEvent,
}

// typescript props
export type RadioProps = ExtractPropTypes<typeof radioProps>
// typescript emit
export type RadioEmit = typeof radioEmit
