import { inject } from "vue";
import { FormContextKey, FormItemContextKey } from "./form.js";
const useFormContext = () => {
  const formContext = inject(FormContextKey, void 0);
  const formItemContext = inject(FormItemContextKey, void 0);
  return {
    formContext,
    formItemContext
  };
};
export {
  useFormContext
};
