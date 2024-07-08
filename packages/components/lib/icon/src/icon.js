"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const props = require("../../packages/utils/vue/props.js");
const iconProps = props.buildProps({
  size: {
    type: [String, Number],
    default: "1em"
  },
  color: {
    type: String,
    default: "inherit"
  }
});
const iconEmits = {
  click: (e) => e instanceof MouseEvent
};
exports.iconEmits = iconEmits;
exports.iconProps = iconProps;
