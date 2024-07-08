"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const props = require("../../packages/utils/vue/props.js");
require("../../packages/theme-chalk/src/components/mask.scss.js");
const maskProps = props.buildProps({
  /**
   * @description Whether to show the mask
   */
  show: {
    type: Boolean,
    default: true
  }
});
const maskEmits = {
  click: (e) => e instanceof MouseEvent,
  ["update:visibility"]: (e) => typeof e == "boolean"
};
exports.maskEmits = maskEmits;
exports.maskProps = maskProps;
