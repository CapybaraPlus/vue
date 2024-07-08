"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const props = require("../../packages/utils/vue/props.js");
const type = require("../../packages/utils/type.js");
const inputProps = props.buildProps({
  /**
   * @description The value of the input
   */
  modelValue: {
    type: props.definePropType([
      String,
      Number,
      void 0,
      null
    ])
  },
  /**
   * @description The placeholder of the input
   */
  placeholder: {
    type: String,
    default: ""
  },
  /**
   * @description the disabled state
   */
  disabled: {
    type: Boolean,
    default: false
  },
  /**
   * @description clear function
   */
  clearable: {
    type: Boolean,
    default: false
  },
  /**
   * @description input type, support text, password, textarea
   */
  type: {
    type: props.definePropType(String),
    default: "text"
  },
  /**
   * @description readonly state
   */
  readonly: {
    type: Boolean,
    default: false
  },
  /**
   * @description input size, support small, medium, large
   */
  size: {
    type: props.definePropType(String)
  },
  /**
   * @description the theme of input
   */
  theme: {
    type: props.definePropType(String)
  },
  /**
   * @description input native autocomplete attribute
   */
  autoComplete: {
    type: props.definePropType(String),
    default: "off"
  },
  /**
   * @description the maximum number of characters
   */
  maxlength: {
    type: [String, Number],
    validator: (val) => {
      return type.isNumber(val);
    }
  },
  /**
   * @description the minimum number of characters
   */
  minlength: {
    type: [String, Number],
    validator: (val) => {
      return type.isNumber(val);
    }
  },
  /**
   * @description show the word count
   */
  showCount: {
    type: Boolean,
    default: false
  }
});
const inputEmits = {
  input: (e) => type.isString(e),
  change: (e) => type.isString(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  keydown: (e) => e instanceof KeyboardEvent,
  ["update:modelValue"]: (val) => typeof val == "string"
};
exports.inputEmits = inputEmits;
exports.inputProps = inputProps;
