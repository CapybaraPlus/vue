"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const props = require("../../packages/utils/vue/props.js");
const floatingUIPlacement = props.definePropType(String);
function getPlacementDefaultValues() {
  const base = ["top", "right", "bottom", "left"];
  const sides = ["start", "center", "end"];
  let baseAndBase = base.map(
    (b1) => base.map((b2) => {
      if (b1 != b2) {
        return `${b1}-${b2}`;
      }
    })
  );
  baseAndBase = baseAndBase.flat().filter((b) => b != void 0);
  const baseAndSides = base.map((b) => sides.map((s) => `${b}-${s}`));
  const result = [...base, ...baseAndBase, ...baseAndSides.flat()];
  return result;
}
const tooltipProps = props.buildProps({
  /**
   * @description tooltip content
   */
  content: {
    type: String
  },
  offset: {
    type: Number,
    default: 10
  },
  /**
   * @description where tooltip should be placed
   */
  placement: {
    type: floatingUIPlacement,
    values: getPlacementDefaultValues(),
    default: "top-center"
  },
  /**
   * @description whether the autoPlacement is enabled or not
   */
  autoPlacement: {
    type: Boolean,
    default: false
  },
  /**
   * @description the method of triggering tooltip
   */
  trigger: {
    type: String,
    values: ["hover", "click"],
    default: "hover"
  },
  /**
   * @description whether the tooltip is disabled or not
   */
  disabled: {
    type: Boolean
  }
});
exports.tooltipProps = tooltipProps;
