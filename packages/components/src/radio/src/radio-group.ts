import { FormSizeValues } from '@capybara-plus/consts'
import {
  buildProps,
  isString,
  isNumber,
  isBoolean,
  definePropTypeValues,
} from '@capybara-plus/utils'
import { ExtractPropTypes } from 'vue'

const radioGroupConst = {
  theme: ['button'] as const,
}

// props
export const radioGroupProps = buildProps({
  /**
   * @description input name
   */
  name: String,
  /**
   * @description v-model
   */
  modelValue: [String, Number, Boolean],
  /**
   * @description flex-direction: column
   */
  column: Boolean,
  /**
   * @description disabled
   */
  disabled: Boolean,
  /**
   * @description theme
   */
  theme: definePropTypeValues(radioGroupConst['theme'], String),
  /**
   * @description size
   */
  size: definePropTypeValues(FormSizeValues, String),
})

// emit
export const radioGroupEmit = {
  'update:modelValue': (val: string | number | boolean | undefined) =>
    isString(val) || isNumber(val) || isBoolean(val),
  change: (val: string | number | boolean | undefined) =>
    isString(val) || isNumber(val) || isBoolean(val),
}

// typescript props
export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>
export type RadioGroupEmit = typeof radioGroupEmit
