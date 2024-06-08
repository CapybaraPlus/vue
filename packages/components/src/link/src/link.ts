import { buildProps } from '@capybara-ui/utils'
import { ExtractPropTypes } from 'vue'

// link props
export const linkProps = buildProps({
  /**
   * @description link theme
   */
  theme: {
    type: String,
    values: ['default', 'primary', 'success', 'warning', 'danger'],
    default: 'default',
  },
  /**
   * @description disabled state
   */
  disabled: Boolean,
  /**
   * @description original attribute target
   */
  target: {
    type: String,
    values: ['_blank', '_self', '_parent', '_top'],
    default: '_self',
  },
  /**
   * @description original attribute href
   */
  href: {
    type: String,
    required: true,
  },
})

// link emits
export const linkEmits = {
  click: (e: MouseEvent) => e instanceof MouseEvent,
}

// typescript link props
export type LinkProps = ExtractPropTypes<typeof linkProps>

// typescript link emits
export type LinkEmits = ExtractPropTypes<typeof linkEmits>
