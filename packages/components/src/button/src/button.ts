import { buildProps } from '@capybara-ui/utils'

export const buttonProps = buildProps({
  // button theme
  theme: {
    type: String,
    values: ['default', 'primary', 'success', 'warning', 'danger'],
    default: 'default',
  },
  // disabled state
  disabled: Boolean,
  // set button size
  size: {
    type: String,
    values: ['normal', 'large', 'medium', 'small'],
    default: 'normal',
  },
  // set button shape
  shape: {
    type: String,
    values: ['default', 'round', 'circle'],
    default: 'default',
  },
  // set button width to 100%
  block: Boolean,
  // loading state
  loading: Boolean,
  // native button type
  type: {
    type: String,
    values: ['button', 'submit', 'reset'],
    default: 'button',
  },
  // custom button color
  color: String,
})
