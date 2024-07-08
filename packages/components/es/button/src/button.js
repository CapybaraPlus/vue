import { buildProps, definePropType } from "../../packages/utils/vue/props.js";
const buttonType = definePropType([
  String,
  void 0
]);
const buttonProps = buildProps({
  /**
   * @description button theme
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
   * @description set button size
   */
  size: {
    type: String,
    values: ["normal", "large", "medium", "small"],
    default: "normal"
  },
  /**
   * @description set button shape
   * @todo add circle shape
   */
  shape: {
    type: String,
    values: ["default", "round"],
    default: "default"
  },
  /**
   * @description set button width to 100%
   */
  block: Boolean,
  /**
   * @description native button type
   */
  type: {
    type: buttonType,
    values: ["button", "submit", "reset"],
    default: "button"
  },
  /**
   * @description custom button color
   * it will cover the theme
   */
  color: String,
  /**
   * @description loading state
   */
  loading: Boolean,
  /**
   * @description button animation when hover the button
   */
  hoverAnimation: {
    type: String,
    values: ["default", "zoom-in"],
    default: "default"
  },
  /**
   * @description button animation when the button is actived
   */
  activeAnimation: {
    type: String,
    values: ["default", "zoom-out"],
    default: "default"
  }
});
const buttonEmits = {
  click: (e) => e instanceof MouseEvent
};
export {
  buttonEmits,
  buttonProps
};
