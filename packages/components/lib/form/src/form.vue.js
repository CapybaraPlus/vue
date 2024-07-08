"use strict";
const vue = require("vue");
const index = require("../../packages/hooks/use-classname/index.js");
const context = require("./context.js");
const form = require("./form.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "RaForm"
  },
  __name: "form",
  props: form.formProps,
  setup(__props, { expose: __expose }) {
    const props = __props;
    const ucn = index.useClassName("form");
    const context$1 = vue.reactive({
      ...vue.toRefs(props),
      ...context.useLabelWidth(),
      ...context.useFormItemContext()
    });
    vue.provide(form.FormContextKey, context$1);
    __expose({
      reset: context$1.resetValidateState,
      validate: context$1.validate
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("form", {
        class: vue.normalizeClass([vue.unref(ucn).b()])
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
module.exports = _sfc_main;
