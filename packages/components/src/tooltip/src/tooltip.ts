import {
  buildProps,
  definePropType,
  definePropTypeValues,
} from '@capybara-plus/utils'
import { ExtractPropTypes } from 'vue'
import { Placement } from '@floating-ui/vue'

const ToolTipConst = {
  trigger: ['hover', 'click'] as const,
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
    type: definePropType<Placement>(String),
    default: 'top-center',
  },
  /**
   * @description whether the autoPlacement is enabled or not
   */
  autoPlacement: Boolean,
  /**
   * @description the method of triggering tooltip
   */
  trigger: {
    type: definePropTypeValues(ToolTipConst['trigger'], String),
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
