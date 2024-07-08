import { defineComponent, reactive, toRefs, provide, openBlock, createElementBlock, normalizeClass, unref, renderSlot } from "vue";
import { useClassName } from "../../packages/hooks/use-classname/index.js";
import { useLabelWidth, useFormItemContext } from "./context.js";
import { formProps, FormContextKey } from "./form.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "RaForm"
  },
  __name: "form",
  props: formProps,
  setup(__props, { expose: __expose }) {
    const props = __props;
    const ucn = useClassName("form");
    const context = reactive({
      ...toRefs(props),
      ...useLabelWidth(),
      ...useFormItemContext()
    });
    provide(FormContextKey, context);
    __expose({
      reset: context.resetValidateState,
      validate: context.validate
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("form", {
        class: normalizeClass([unref(ucn).b()])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
