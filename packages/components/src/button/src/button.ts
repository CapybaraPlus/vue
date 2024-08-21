import { ExtractPropTypes } from 'vue'
import { buildProps, definePropTypeValues } from '@capybara-plus/utils'

const ButtonConst = {
  type: ['default', 'primary', 'success', 'warning', 'danger'] as const,
  size: ['normal', 'large', 'medium', 'small'] as const,
  nativeType: ['button', 'submit', 'reset', undefined] as const,
  shape: ['default', 'round', 'circle'] as const,
  theme: ['default', 'plain'] as const,
}

// button props
export const buttonProps = buildProps({
  /**
   * @description button type
   */
  type: {
    type: definePropTypeValues(ButtonConst['type'], String),
    default: 'default',
  },
  /**
   * @description disabled state
   */
  disabled: Boolean,
  /**
   * @description set button size
   */
  size: {
    type: definePropTypeValues(ButtonConst['size'], String),
    default: 'normal',
  },
  /**
   * @description set button shape
   * @todo add circle shape
   */
  shape: {
    type: definePropTypeValues(ButtonConst['shape'], String),
    default: 'default',
  },
  /**
   * @description set button width to 100%
   */
  block: Boolean,
  /**
   * @description native button type
   */
  nativeType: {
    type: definePropTypeValues(ButtonConst['nativeType'], String),
    default: 'button',
  },
  /**
   * @description custom button color
   * it will cover the theme
   */
  color: String,
  /**
   * @description loading state
   */
  loading: Boolean,
  /**
   * @description show loading icon
   */
  showLoadingIcon: {
    type: Boolean,
    default: true,
  },
  /**
   * @description theme
   */
  theme: {
    type: definePropTypeValues(ButtonConst['theme'], String),
    default: 'default',
  },
} as const)

// button emits
export const buttonEmits = {
  click: (e: MouseEvent) => e instanceof MouseEvent,
  mousedown: (e: MouseEvent) => e instanceof MouseEvent,
  mouseup: (e: MouseEvent) => e instanceof MouseEvent,
}

// typescript button props
export type ButtonProps = ExtractPropTypes<typeof buttonProps>

// typescript button emits
export type ButtonEmits = typeof buttonEmits
