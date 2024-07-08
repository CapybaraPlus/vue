import _sfc_main from "./src/form.vue.js";
import _sfc_main$1 from "./src/form-item.vue.js";
import { withInstall } from "../packages/utils/vue/install.js";
import "../packages/theme-chalk/src/components/form.scss.js";
import "../packages/theme-chalk/src/components/form-item.scss.js";
import { FormContextKey, FormItemContextKey, FormItemId, formItemProps, formProps } from "./src/form.js";
import "vue";
const RaForm = withInstall(_sfc_main);
const RaFormItem = withInstall(_sfc_main$1);
export {
  FormContextKey,
  FormItemContextKey,
  FormItemId,
  RaForm,
  RaFormItem,
  formItemProps,
  formProps
};
