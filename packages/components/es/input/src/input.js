import { buildProps, definePropType } from "../../packages/utils/vue/props.js";
import { isNumber, isString } from "../../packages/utils/type.js";
const inputProps = buildProps({
  /**
   * @description The value of the input
   */
  modelValue: {
    type: definePropType([
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
    type: definePropType(String),
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
    type: definePropType(String)
  },
  /**
   * @description the theme of input
   */
  theme: {
    type: definePropType(String)
  },
  /**
   * @description input native autocomplete attribute
   */
  autoComplete: {
    type: definePropType(String),
    default: "off"
  },
  /**
   * @description the maximum number of characters
   */
  maxlength: {
    type: [String, Number],
    validator: (val) => {
      return isNumber(val);
    }
  },
  /**
   * @description the minimum number of characters
   */
  minlength: {
    type: [String, Number],
    validator: (val) => {
      return isNumber(val);
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
  input: (e) => isString(e),
  change: (e) => isString(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  keydown: (e) => e instanceof KeyboardEvent,
  ["update:modelValue"]: (val) => typeof val == "string"
};
export {
  inputEmits,
  inputProps
};
