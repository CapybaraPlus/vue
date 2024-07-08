import { buildProps } from "../../packages/utils/vue/props.js";
import { IconType } from "../../packages/utils/type.js";
const linkProps = buildProps({
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
    type: IconType
  }
});
const linkEmits = {
  click: (e) => e instanceof MouseEvent
};
export {
  linkEmits,
  linkProps
};
