import { h, render } from 'vue'
import { RippleProps } from './ripple'
import Ripple from './ripple.vue'

export interface RippleOptions {
  parent: HTMLElement
  event: MouseEvent
  color?: string
  zIndex?: number
  afterAnimationStart?: () => void
  beforeAnimationEnd?: () => void
  duration?: number
}

const normalizedProps = (options: RippleOptions) => {
  let { duration } = options
  duration ??= 600
  return {
    ...options,
    duration,
  }
}

export const createRipple = (options: RippleOptions) => {
  const props: RippleProps = {
    ...normalizedProps(options),
    unmount,
  }

  const container = document.createElement('div')
  const rippleVNode = h(Ripple, props)
  render(rippleVNode, container)
  props.parent.appendChild(container.firstChild!)

  function unmount() {
    render(null, container)
  }

  const instance = {
    exposed: rippleVNode.component!.exposed,
  }

  return instance
}
