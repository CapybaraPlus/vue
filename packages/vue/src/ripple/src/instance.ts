import { h, render, type UnwrapRef } from 'vue'
import { RippleProps } from './ripple'
import Ripple from './ripple.vue'

interface BaseRippleOptions {
  parent: HTMLElement
  event: MouseEvent
  color?: string
  zIndex?: number
  afterAnimationStart?: () => void
  beforeAnimationEnd?: () => void
  duration?: number
}
export type RippleOptions = UnwrapRef<BaseRippleOptions>

const normalizedProps = (options: RippleOptions) => {
  options.duration ??= 600
  return options
}

export const createRipple = (options: RippleOptions) => {
  const props: RippleProps = {
    ...(normalizedProps(options) as any),
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
