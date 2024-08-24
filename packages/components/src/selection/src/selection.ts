import { buildProps, definePropTypeValues } from '@capybara-plus/utils'
import { ExtractPropTypes } from 'vue'
import { FormSizeValues } from '@capybara-plus/consts'

const SelectionConst = {
  size: FormSizeValues,
  theme: ['mask'] as const,
}

// selection props
export const selectionProps = buildProps({
  /**
   * @description placeholder
   */
  placeholder: String,
  /**
   * @description height
   */
  height: [Number, String],
  /**
   * @description width
   */
  width: [Number, String],
  /**
   * @description size
   */
  size: definePropTypeValues(SelectionConst['size'], String),
  /**
   * @description whether multiple
   */
  multiple: Boolean,
  /**
   * @description html tabindex
   */
  tabindex: {
    type: [String, Number],
    default: 0,
  },
  /**
   * @description selection theme
   */
  theme: definePropTypeValues(SelectionConst['theme'], String),
})

// select emits
export const selectionEmits = {
  input: (value: any) => value,
  change: (value: any) => value,
}

// selection props type
export type SelectionProps = ExtractPropTypes<typeof selectionProps>

// selection emits type
export type SelectionEmits = ExtractPropTypes<typeof selectionEmits>
