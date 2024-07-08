"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const props = require("../../packages/utils/vue/props.js");
const type = require("../../packages/utils/type.js");
const linkProps = props.buildProps({
  /**
   * @description link theme
   */
  theme: {
    type: String,
    values: ["default", "primary", "success", "warning", "danger"],
    default: "default"
  },
  /**
   * @description disabled state
   */
  disabled: Boolean,
  /**
   * @description original attribute target
   */
  target: {
    type: String,
    values: ["_blank", "_self", "_parent", "_top"],
    default: "_self"
  },
  /**
   * @description original attribute href
   */
  href: String,
  /**
   * @description link icon
   */
  icon: {
    type: type.IconType
  }
});
const linkEmits = {
  click: (e) => e instanceof MouseEvent
};
exports.linkEmits = linkEmits;
exports.linkProps = linkProps;
