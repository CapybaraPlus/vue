import { buildProps, definePropType } from '@capybara-plus/utils'
import { ExtractPropTypes } from 'vue'

// input props
export const inputProps = buildProps({
  modelValue: {
    type: definePropType<string | number | undefined | null>([
      String,
      Number,
      undefined,
      null,
    ]),
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
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
