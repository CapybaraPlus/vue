import {
  buildProps,
  definePropType,
  definePropTypeValues,
  isNumber,
  isString,
} from '@capybara-plus/utils'
import { FormSizeValues } from '@capybara-plus/consts'
import { ExtractPropTypes } from 'vue'

const InputConst = {
  type: ['text', 'password', 'textarea'] as const,
  theme: ['mask', 'line'] as const,
  size: FormSizeValues,
}

// input props
export const inputProps = buildProps({
  /**
   * @description The value of the input
   */
  modelValue: {
    type: definePropType<string | number | undefined | null>([
      String,
      Number,
      undefined,
      null,
    ]),
  },
  /**
   * @description The placeholder of the input
   */
  placeholder: {
    type: String,
    default: '',
  },
  /**
   * @description the disabled state
   */
  disabled: Boolean,
  /**
   * @description clear function
   */
  clearable: Boolean,
  /**
   * @description input type, support text, password, textarea
   */
  type: {
    type: definePropTypeValues(InputConst['type'], String),
    default: 'text',
  },
  /**
   * @description readonly state
   */
  readonly: Boolean,
  /**
   * @description input size, support small, medium, large
   */
  size: definePropTypeValues(InputConst['size'], String),
  /**
   * @description the theme of input
   */
  theme: definePropTypeValues(InputConst['theme'], String),
  /**
   * @description input native autocomplete attribute
   */
  autoComplete: {
    type: definePropType(String),
    default: 'off',
  },
  /**
   * @description the maximum number of characters
   */
  maxlength: {
    type: [String, Number],
    validator: (val: string | number): val is number => {
      return isNumber(val)
    },
  },
  /**
   * @description the minimum number of characters
   */
  minlength: {
    type: [String, Number],
    validator: (val: string | number): boolean => {
      return isNumber(val)
    },
  },
  /**
   * @description show the word count
   */
  showCount: Boolean,
})

// input emits
export const inputEmits = {
  input: (e: string) => isString(e),
  change: (e: string) => isString(e),
  focus: (e: FocusEvent) => e instanceof FocusEvent,
  blur: (e: FocusEvent) => e instanceof FocusEvent,
  keydown: (e: KeyboardEvent) => e instanceof KeyboardEvent,
  ['update:modelValue']: (val: string) => typeof val == 'string',
}

// typescript input props
export type InputProps = ExtractPropTypes<typeof inputProps>

// typescript input emits
export type InputEmits = ExtractPropTypes<typeof inputEmits>
