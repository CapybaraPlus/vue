import {
  buildProps,
  definePropTypeValues,
  IconType,
} from '@capybara-plus/utils'
import { ExtractPropTypes } from 'vue'

const LinkConst = {
  theme: ['default', 'primary', 'success', 'warning', 'danger'] as const,
  target: ['_blank', '_self', '_parent', '_top'] as const,
}

// link props
export const linkProps = buildProps({
  /**
   * @description link theme
   */
  theme: {
    type: definePropTypeValues(LinkConst['theme'], String),
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
    type: definePropTypeValues(LinkConst['target'], String),
    default: '_self',
  },
  /**
   * @description original attribute href
   */
  href: String,
  /**
   * @description link icon
   */
  icon: {
    type: IconType,
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
