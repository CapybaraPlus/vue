import { buildProps } from '@capybara-plus/utils'
import { ExtractPropTypes } from 'vue'

// props
export const radioProps = buildProps({})
// emits
export const radioEmits = {}

// typescript props
export type RadioProps = ExtractPropTypes<typeof radioProps>
// typescript emits
export type RadioEmits = ExtractPropTypes<typeof radioEmits>
