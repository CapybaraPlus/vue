import { buildProps, definePropType } from "../../packages/utils/vue/props.js";
import { createId } from "../../packages/utils/id.js";
const formProps = buildProps({
  model: {
    type: Object,
    default: () => {
    }
  },
  rules: {
    type: definePropType(Object),
    default: () => {
    }
  }
});
const formItemProps = buildProps({
  label: {
    type: String
  },
  prop: {
    type: String
  }
});
const FormContextKey = Symbol("formContext");
const FormItemContextKey = Symbol("formItemContext");
const FormItemId = () => createId("form-item");
export {
  FormContextKey,
  FormItemContextKey,
  FormItemId,
  formItemProps,
  formProps
};
