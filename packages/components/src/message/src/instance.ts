import { h, render } from 'vue'
import Message from './message.tsx'
import {
  MessageInstance,
  MessageOptions,
  NormalizeMessageOptions,
  MessageFunction,
} from './message.ts'
import { createId, isElement, isString } from '@capybara-plus/utils'
import { Error, Success, Warning } from '@capybara-plus/icons-vue'

// message instance
// from the message.tsx
// when the message is mouted, it will call the onReady function
let instance: MessageInstance

// normalize options
function normalizeOptions(options: MessageOptions): NormalizeMessageOptions {
  // normalize appendTo
  let appendTo: any = options.appendTo ? options.appendTo : document.body
  if (isString(appendTo)) {
    appendTo = document.querySelector(appendTo)
  }
  if (!isElement(appendTo)) {
    console.warn(
      'message appendTo is not a valid element, use document.body instead'
    )
    appendTo = document.body
  }

  // normalize theme
  const iconMapTheme = {
    default: undefined,
    success: Success,
    warning: Warning,
    error: Error,
  }
  const icon = iconMapTheme[options.theme ?? 'default']

  return {
    ...options,
    duration: options.duration ?? 3000,
    timer: null as ReturnType<typeof setTimeout> | null,
    _id: createId('ra-message'),
    appendTo,
    icon,
  }
}

const callMessage: MessageFunction = (options: MessageOptions) => {
  const normalized = normalizeOptions(options)

  // call the onReady function
  if (!instance) {
    const messageVNode = h(Message, {
      onReady: (el: MessageInstance) => {
        instance = el
        doCreateMessageInstance()
      },
    })
    render(messageVNode, normalized.appendTo as Element)
  } else {
    doCreateMessageInstance()
  }

  // create a message instance
  function doCreateMessageInstance() {
    instance.createMessageInstance({
      ...normalized,
    })
  }
}

export default callMessage
