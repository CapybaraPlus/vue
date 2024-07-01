import { h, render, shallowReactive } from 'vue'
import Message from './message.tsx'
import {
  MessageOptions,
  MessageFunction,
  MessageProps,
  MessageInstance,
  MessageExposed,
  MessageInstanceUtils,
} from './message.ts'
import { TimerType, createId, isElement, isString } from '@capybara-plus/utils'
import { Error, Success, Warning } from '@capybara-plus/icons-vue'

let OFFSET: number
let GAP: number

// normalize options
function normalizeOptions(options: MessageOptions) {
  // normalize appendTo
  let appendTo: HTMLElement | null = document.body
  if (isString(options.appendTo)) {
    appendTo = document.querySelector(options.appendTo)
  }
  if (!isElement(appendTo)) {
    console.warn(
      'message appendTo is not a valid element, use document.body instead'
    )
    appendTo = document.body
  }

  // normalize offset
  OFFSET = options.offset ?? 20
  // normalize gap
  GAP = options.gap ?? 20

  // normalize theme
  const iconMapTheme = {
    default: null,
    success: Success,
    warning: Warning,
    error: Error,
  }
  const icon = iconMapTheme[options.theme ?? 'default']

  return {
    ...options,
    duration: options.duration ?? 3000,
    autoCloseTimer: undefined as TimerType,
    _id: createId('ra-message'),
    appendTo,
    icon,
    offset: OFFSET,
  }
}

// create message instance
function createMessage(options: MessageOptions): MessageInstance {
  const { appendTo, ...normalized } = normalizeOptions(options)

  const props: MessageProps = {
    ...normalized,
    onClose: () => {
      normalized.onClose?.()
      closeMessage(instance)
    },
    afterClose: () => {
      render(null, container)
    },
    onMounted: () => {
      const messageInstancUtils: MessageInstanceUtils = {
        getInstance,
        getPrevBottom,
        getGap,
      }
      return messageInstancUtils
    },
  } as MessageProps

  // create and render message
  const container = document.createElement('div')
  const messageVNode = h(Message, props)
  if (normalized.appContext) {
    messageVNode.appContext = normalized.appContext
  }
  render(messageVNode, container)
  appendTo.appendChild(container.firstChild!)

  // get message instance by id
  function getInstance() {
    const targetIndex = messageQueue.findIndex(
      (message) => message._id === instance._id
    )
    const target = messageQueue[targetIndex]
    let prev: MessageInstance | undefined

    if (targetIndex > 0) {
      prev = messageQueue[targetIndex - 1]
    }
    return {
      prev,
      target,
      targetIndex,
    }
  }

  // get the prev message bottom
  function getPrevBottom() {
    const { prev } = getInstance()
    return prev ? prev.exposed.bottom.value : OFFSET
  }

  // get the gap between the messages
  function getGap() {
    const { targetIndex } = getInstance()
    if (targetIndex <= 0) return 0
    return GAP
  }

  // close the message
  // and remove message from the message queue
  function closeMessage(instance: MessageInstance) {
    const { targetIndex } = getInstance()
    if (targetIndex != -1) messageQueue.splice(targetIndex, 1)
    instance.exposed.close()
  }

  const instance: MessageInstance = {
    _id: normalized._id,
    exposed: messageVNode.component!.exposed! as MessageExposed,
  }

  return instance
}

// message instances queue
// if we set it reactivly, it will auto update when close some message
// we are supposed to use shallowReactive instead of reactive
// because the component is made a reactive object, it can lead to unnecessary performance overhead
const messageQueue: MessageInstance[] = shallowReactive([])
const callMessage: MessageFunction = (options: MessageOptions) => {
  const instance = createMessage(options)
  if (messageQueue.length >= 3) {
    messageQueue[0].exposed.close()
  }
  messageQueue.push(instance)
}

export default callMessage
