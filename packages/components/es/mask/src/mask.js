import { buildProps } from "../../packages/utils/vue/props.js";
import "../../packages/theme-chalk/src/components/mask.scss.js";
const maskProps = buildProps({
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
export {
  maskEmits,
  maskProps
};
