import { ExtractPropTypes } from 'vue'
import { buildProps } from '@capybara-ui/utils'

// button props
export const buttonProps = buildProps({
  /**
   * @description button theme
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
   * @description set button size
   */
  size: {
    type: String,
    values: ['normal', 'large', 'medium', 'small'],
    default: 'normal',
  },
  /**
   * @description set button shape
   * @todo add circle shape
   */
  shape: {
    type: String,
    values: ['default', 'round'],
    default: 'default',
  },
  /**
   * @description set button width to 100%
   */
  block: Boolean,
  /**
   * @description native button type
   */
  type: {
    type: String,
    values: ['button', 'submit', 'reset'],
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
   * @description button animation when hover the button
   */
  hoverAnimation: {
    type: String,
    values: ['default', 'zoom-in'],
    default: 'default',
  },
  /**
   * @description button animation when the button is actived
   */
  activeAnimation: {
    type: String,
    values: ['default', 'zoom-out'],
    default: 'default',
  },
})

// button emits
export const buttonEmits = {
  click: (e: MouseEvent) => e instanceof MouseEvent,
}

// typescript button props
export type ButtonProps = ExtractPropTypes<typeof buttonProps>

// typescript button emits
export type ButtonEmits = typeof buttonEmits
