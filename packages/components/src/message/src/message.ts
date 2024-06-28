import { buildProps } from '@capybara-plus/utils'
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

export type MessageInstance = {
  createMessageInstance: (options: NormalizeMessageOptions) => void
}
