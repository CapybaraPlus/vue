import { buildProps } from '@capybara-plus/utils'
import { ExtractPropTypes } from 'vue'

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
})

// select emits
export const selectionEmits = {
  change: (value: any) => value,
}

// selection props type
export type SelectionProps = ExtractPropTypes<typeof selectionProps>

// selection emits type
export type SelectionEmits = ExtractPropTypes<typeof selectionEmits>
