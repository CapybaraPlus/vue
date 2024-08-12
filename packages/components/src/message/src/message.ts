import { buildProps, definePropType, IconType } from '@capybara-plus/utils'
import { AppContext, ExtractPropTypes, Ref, VNode } from 'vue'

// message props
export const messageProps = buildProps({
  /**
   * @description the content of the message
   */
  content: definePropType<string | VNode>([String, Object]),
  /**
   * @description message close after the duration
   */
  duration: {
    type: Number,
    duration: 3000,
  },
  /**
   * @description append to the target element
   */
  appendTo: [String, Element],
  /**
   * @description message theme
   */
  theme: definePropType<MessageTheme>(String),
  /**
   * @description message icon
   */
  icon: String,
  /**
   * @description message id
   */
  _id: String,
  /**
   * @description message close callback
   */
  onClose: definePropType<() => void>(Function),
  /**
   * @description
   */
  afterClose: definePropType<() => void>(Function),
  /**
   * @description message ready callback
   */
  onMounted: definePropType<() => MessageInstanceUtils>(Function),
  /**
   * @description message z-index
   */
  zIndex: Number,
})

// typescript message props
export type MessageProps = ExtractPropTypes<typeof messageProps>

// message options input when call the message function
export interface MessageOptions {
  /**
   * @description the content of the message
   */
  content: string | VNode
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
  /**
   * @description custom icon
   */
  icon?: typeof IconType
  /**
   * @description message close callback
   */
  onClose?: () => void
  /**
   * @description offset
   */
  offset?: number
  /**
   * @description the gap between the messages
   */
  gap?: number
  /**
   * @description the z-index of the message
   */
  zIndex?: number
  /**
   * @description app context
   */
  appContext?: AppContext | null
}

// message.tsx exposed
export type MessageExposed = {
  close: () => void
  bottom: Ref<number>
  offsetTop: Ref<number>
}

export type MessageInstance = {
  _id: string
  exposed: MessageExposed
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

// instance.ts return some utils
export type MessageInstanceUtils = {
  getInstance: () => {
    prev: MessageInstance | undefined
    target: MessageInstance
    targetIndex: number
  }
  getPrevBottom: () => number
  getGap: () => number
}
