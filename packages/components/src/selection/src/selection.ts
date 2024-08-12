import { buildProps } from '@capybara-plus/utils'
import { ExtractPropTypes } from 'vue'

// selection props
export const selectionProps = buildProps({
  height: [Number, String],
})

// selection props type
export type SelectionProps = ExtractPropTypes<typeof selectionProps>
