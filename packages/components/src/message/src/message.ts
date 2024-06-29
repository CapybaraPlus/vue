import { buildProps, IconType } from '@capybara-plus/utils'
import { ExtractPropTypes } from 'vue'

// message options input when call the message function
export interface MessageOptions {
  /**
   * @description the content of the message
   */
  content: string
  /**
   * @description message close after the duration
   * if duration <= 0 then it will not close
   */
  duration?: number
  /**
   * @description append to the target element
   */
  appendTo?: string | Element
  /**
   * @description message theme
   */
  theme?: MessageTheme
  icon?: typeof IconType
}

// normalize message options
export interface NormalizeMessageOptions extends MessageOptions {
  _id: string
  timer: ReturnType<typeof setTimeout> | null
}

// message props
export const messageProps = buildProps({
  onReady: {
    type: Function,
  },
})

// typescript message props
export type MessageProps = ExtractPropTypes<typeof messageProps>

// typescript message instance
export type MessageInstance = {
  createMessageInstance: (options: NormalizeMessageOptions) => void
}

// message theme
export const messageTheme = ['default', 'success', 'warning', 'error'] as const // as const is important!! it will be detected as a literal but not a string
export type MessageTheme = (typeof messageTheme)[number]

// message function
export type MessageFunction = (options: MessageOptions) => void
// syntactic suger message function
export type SyntacticMessageFunction = MessageFunction & {
  [K in MessageTheme]: MessageFunction
}
