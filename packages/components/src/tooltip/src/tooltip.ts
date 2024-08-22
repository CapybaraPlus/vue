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
  /**
   * @description the offset between the tooltip and the reference element
   */
  offset: {
    type: [String, Number],
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
  disabled: Boolean,
  /**
   * @description whether show the arrow or not
   */
  showArrow: {
    type: Boolean,
    default: true,
  },
  /**
   * @description transition animation
   */
  transition: String,
  /**
   * @description use v-if or v-show
   */
  useShow: {
    type: Boolean,
    default: false,
  },
  /**
   * @description when trigger method is click, click the outside of the el to close tooltip
   */
  triggerEl: definePropType<any>(Object),
})

// typescript tooltip props
export type TooltipProps = ExtractPropTypes<typeof tooltipProps>

// typescript tooltip exposed
export interface TooltipExposed {
  close: () => void
}
