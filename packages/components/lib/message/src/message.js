"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const props = require("../../packages/utils/vue/props.js");
const type = require("../../packages/utils/type.js");
const messageProps = props.buildProps({
  /**
   * @description the content of the message
   */
  content: {
    type: props.definePropType([String, Object])
  },
  /**
   * @description message close after the duration
   */
  duration: {
    type: Number
  },
  /**
   * @description append to the target element
   */
  appendTo: {
    type: [String, Element]
  },
  /**
   * @description message theme
   */
  theme: {
    type: props.definePropType(String)
  },
  /**
   * @description message icon
   */
  icon: {
    type: type.IconType
  },
  /**
   * @description message id
   */
  _id: {
    type: String
  },
  /**
   * @description message close callback
   */
  onClose: {
    type: props.definePropType(Function)
  },
  /**
   * @description
   */
  afterClose: {
    type: props.definePropType(Function)
  },
  /**
   * @description message ready callback
   */
  onMounted: {
    type: props.definePropType(Function)
  },
  /**
   * @description message z-index
   */
  zIndex: {
    type: Number
  }
});
const messageTheme = ["default", "success", "warning", "error"];
exports.messageProps = messageProps;
exports.messageTheme = messageTheme;
