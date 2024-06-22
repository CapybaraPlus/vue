import { buildProps, definePropType } from '@capybara-ui/utils'
import { ExtractPropTypes } from 'vue'
import { Placement } from '@floating-ui/vue'

// placemnet type
const floatingUIPlacement = definePropType<Placement>(String)
// placement default values
function getPlacementDefaultValues() {
  const base = ['top', 'right', 'bottom', 'left']
  const sides = ['start', 'center', 'end']
  // combine base and base
  let baseAndBase = base.map((b1) =>
    base.map((b2) => {
      if (b1 != b2) {
        return `${b1}-${b2}`
      }
    })
  )
  // handle undefined
  baseAndBase = baseAndBase.flat().filter((b) => b != undefined) as any
  // combine base and sides
  const baseAndSides = base.map((b) => sides.map((s) => `${b}-${s}`))
  const result = [...base, ...baseAndBase, ...baseAndSides.flat()]
  return result
}

// tooltip props
export const tooltipProps = buildProps({
  /**
   * @description tooltip content
   */
  content: {
    type: String,
  },
  offset: {
    type: Number,
    default: 10,
  },
  /**
   * @description where tooltip should be placed
   */
  placement: {
    type: floatingUIPlacement,
    values: getPlacementDefaultValues(),
    default: 'top-center',
  },
  /**
   * @description whether the autoPlacement is enabled or not
   */
  autoPlacement: {
    type: Boolean,
    default: false,
  },
  /**
   * @description the method of triggering tooltip
   */
  trigger: {
    type: String,
    values: ['hover', 'click'],
    default: 'hover',
  },
  /**
   * @description whether the tooltip is disabled or not
   */
  disabled: {
    type: Boolean,
  },
})

// typescript tooltip props
export type TooltipProps = ExtractPropTypes<typeof tooltipProps>
