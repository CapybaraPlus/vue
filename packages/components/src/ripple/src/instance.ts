import { h, render } from 'vue'
import { RippleProps } from './ripple'
import Ripple from './ripple.vue'

export interface RippleOptions {
  parent: HTMLElement
  event: MouseEvent
  color?: string
}

export const createRipple = ({ parent, event, color }: RippleOptions) => {
  const props: RippleProps = {
    parent,
    event,
    unmount,
    color,
  }

  const container = document.createElement('div')
  const rippleVNode = h(Ripple, props)
  render(rippleVNode, container)
  parent.appendChild(container.firstChild!)

  function unmount() {
    render(null, container)
  }

  const instance = {
    exposed: rippleVNode.component!.exposed,
  }

  return instance
}
