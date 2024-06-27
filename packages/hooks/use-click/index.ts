// to resolve the difference of the target and currentTarget in the same element
// about mousedown mouseup and click event

import { NOOP } from '@vue/shared'

type MouseEventFunction = (e: MouseEvent) => void
type ClickOptions = {
  handleClick?: MouseEventFunction
  handleMousedown?: MouseEventFunction
  handleMouseup?: MouseEventFunction
}
export const useClick = ({
  handleClick,
  handleMousedown,
  handleMouseup,
}: ClickOptions) => {
  let onClick
  let onMousedown
  let onMouseup
  if (!handleClick) {
    onClick = onMousedown = onMouseup = NOOP
  } else {
    let isMousedownSameTarget = false
    let isMouseupSameTarget = false

    onMousedown = (e: MouseEvent) => {
      handleMousedown?.(e)
      isMousedownSameTarget = e.target === e.currentTarget
    }

    onMouseup = (e: MouseEvent) => {
      handleMouseup?.(e)
      isMouseupSameTarget = e.target === e.currentTarget
    }

    onClick = (e: MouseEvent) => {
      if (isMousedownSameTarget && isMouseupSameTarget) {
        handleClick(e)
      }
      isMousedownSameTarget = isMouseupSameTarget = false
    }
  }

  return {
    onClick,
    onMousedown,
    onMouseup,
  }
}
