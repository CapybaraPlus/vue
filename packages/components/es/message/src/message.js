import { buildProps, definePropType } from "../../packages/utils/vue/props.js";
import { IconType } from "../../packages/utils/type.js";
const messageProps = buildProps({
  /**
   * @description the content of the message
   */
  content: {
    type: definePropType([String, Object])
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
    type: definePropType(String)
  },
  /**
   * @description message icon
   */
  icon: {
    type: IconType
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
    type: definePropType(Function)
  },
  /**
   * @description
   */
  afterClose: {
    type: definePropType(Function)
  },
  /**
   * @description message ready callback
   */
  onMounted: {
    type: definePropType(Function)
  },
  /**
   * @description message z-index
   */
  zIndex: {
    type: Number
  }
});
const messageTheme = ["default", "success", "warning", "error"];
export {
  messageProps,
  messageTheme
};
