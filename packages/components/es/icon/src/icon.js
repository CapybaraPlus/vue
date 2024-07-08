import { buildProps } from "../../packages/utils/vue/props.js";
const iconProps = buildProps({
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
export {
  iconEmits,
  iconProps
};
