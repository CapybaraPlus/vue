import { buildProps, definePropType } from '@capybara-plus/utils'
import { ExtractPropTypes } from 'vue'

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
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * @description clear function
   */
  clearable: {
    type: Boolean,
    default: false,
  },
  /**
   * @description input type, support text, password, textarea
   */
  type: {
    type: definePropType<'text' | 'password' | 'textarea'>(String),
    default: 'text',
  },
  /**
   * @description readonly state
   */
  readonly: {
    type: Boolean,
    default: false,
  },
  /**
   * @description input size, support small, medium, large
   */
  size: {
    type: definePropType<'small' | 'large'>(String),
  },
  /**
   * @description the theme of input
   */
  theme: {
    type: definePropType<'line' | 'mask'>(String),
  },
  /**
   * @description input native autocomplete attribute
   */
  autoComplete: {
    type: definePropType(String),
    default: 'off',
  },
})

// input emits
export const inputEmits = {
  input: (e: Event) => e instanceof Event,
  ['update:modelValue']: (val: string) => typeof val == 'string',
}

// typescript input props
export type InputProps = ExtractPropTypes<typeof inputProps>

// typescript input emits
export type InputEmits = ExtractPropTypes<typeof inputEmits>
