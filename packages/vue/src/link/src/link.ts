import { buildProps, definePropTypeValues } from '@capybara-plus/utils'
import { ExtractPropTypes } from 'vue'

const LinkConst = {
  type: ['primary', 'success', 'warning', 'danger'] as const,
  target: ['_blank', '_self', '_parent', '_top'] as const,
}

// link props
export const linkProps = buildProps({
  /**
   * @description link theme
   */
  type: definePropTypeValues(LinkConst['type'], String),
  /**
   * @description disabled state
   */
  disabled: Boolean,
  /**
   * @description original attribute target
   */
  target: {
    type: definePropTypeValues(LinkConst['target'], String),
    default: '_self',
  },
  /**
   * @description original attribute href
   */
  href: String,
})

// link emits
export const linkEmit = {
  click: (e: MouseEvent) => e instanceof MouseEvent,
}

// typescript link props
export type LinkProps = ExtractPropTypes<typeof linkProps>

// typescript link emits
export type LinkEmits = typeof linkEmit
