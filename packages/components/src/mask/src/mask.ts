import { buildProps } from '@capybara-ui/utils'
import { ExtractPropTypes } from 'vue'
import '../styles/index'

// mask props
export const maskProps = buildProps({
  content: {
    type: String,
  },
})

// typescript mask props
export type MaskProps = ExtractPropTypes<typeof maskProps>
