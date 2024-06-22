import { buildProps, definePropType } from '@capybara-ui/utils'
import { ExtractPropTypes } from 'vue'
import { Placement } from '@floating-ui/vue'

const floatingUIPlacement = definePropType<Placement>(String)

// tooltip props
export const tooltipProps = buildProps({
  /**
   * @description tooltip content
   */
  content: {
    type: String,
  },
  /**
   * @description where tooltip should be placed
   */
  placement: {
    type: floatingUIPlacement,
    default: 'top-center',
  },
  /**
   * @description whether the autoPlacement is enabled or not
   */
  autoPlacement: {
    type: Boolean,
    default: true,
  },
  /**
   * @todo trriger type: hover or click
   */
})

// typescript tooltip props
export type TooltipProps = ExtractPropTypes<typeof tooltipProps>
