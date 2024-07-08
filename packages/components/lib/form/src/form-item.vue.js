"use strict";
const vue = require("vue");
const index$4 = require("../../packages/hooks/use-classname/index.js");
const index$1 = require("../../packages/hooks/use-transition/index.js");
const form = require("./form.js");
const index = require("../../node_modules/.pnpm/@vueuse_core@10.11.0_vue@3.4.27/node_modules/@vueuse/core/index.js");
const index$5 = require("../../node_modules/.pnpm/async-validator@4.2.5/node_modules/async-validator/dist-web/index.js");
const index$2 = require("../../icon/index.js");
const index$3 = require("../../node_modules/.pnpm/@capybara-plus_icons-vue@1.0.5_vue@3.4.27/node_modules/@capybara-plus/icons-vue/dist/index.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "RaFormItem"
  },
  __name: "form-item",
  props: form.formItemProps,
  setup(__props) {
    const props = __props;
    const ucn = index$4.useClassName("form-item");
    const formContext = vue.inject(form.FormContextKey, void 0);
    const labelRef = vue.ref();
    index.useResizeObserver(labelRef, (entries) => {
      formContext == null ? void 0 : formContext.registerLabelWidth(entries[0].target.clientWidth);
    });
    const labelStyle = vue.computed(() => {
      return {
        minWidth: (formContext == null ? void 0 : formContext.labelWidth) + "px"
        // ref in the reactive object will be wrapped
      };
    });
    const validateState = vue.ref("pending");
    function changeValidateState(state) {
      validateState.value = state;
    }
    function resetValidateState() {
      changeValidateState("pending");
    }
    const successValidateMessage = vue.ref("");
    function onValidateSuccess() {
      var _a;
      changeValidateState("success");
      successValidateMessage.value = ((_a = currentRule.value) == null ? void 0 : _a.successMessage) ?? "";
    }
    const errorValidateMessage = vue.ref("");
    function onValidateError(error) {
      var _a, _b;
      changeValidateState("error");
      const { errors } = error;
      if ((_a = currentRule.value) == null ? void 0 : _a.errorMessage) {
        errorValidateMessage.value = currentRule.value.errorMessage;
      }
      errorValidateMessage.value = errors ? errors[0].message ? ((_b = currentRule.value) == null ? void 0 : _b.errorMessage) ?? errors[0].message : `${props.prop} is required` : "";
    }
    const currentRule = vue.computed(() => {
      var _a;
      return (_a = formContext == null ? void 0 : formContext.rules) == null ? void 0 : _a[props.prop];
    });
    function validate() {
      if (!props.prop || !currentRule.value)
        return;
      const value = formContext == null ? void 0 : formContext.model[props.prop];
      const validator = new index$5({
        [props.prop]: currentRule.value
      });
      return new Promise((resolve, reject) => {
        validator.validate({ [props.prop]: value }).then(() => {
          onValidateSuccess();
          resolve();
        }).catch((error) => {
          onValidateError(error);
          reject();
        });
      });
    }
    const context = vue.reactive({
      ...vue.toRefs(props),
      validate,
      resetValidateState,
      _id: form.FormItemId()
    });
    vue.provide(form.FormItemContextKey, vue.reactive(context));
    vue.onMounted(() => {
      formContext == null ? void 0 : formContext.registerFormItemContext(context);
    });
    return (_ctx, _cache) => {
      var _a;
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass([vue.unref(ucn).b(), vue.unref(ucn).is((_a = currentRule.value) == null ? void 0 : _a.required, "required")])
      }, [
        vue.createElementVNode("label", {
          ref_key: "labelRef",
          ref: labelRef,
          class: vue.normalizeClass([vue.unref(ucn).e("label")]),
          style: vue.normalizeStyle(labelStyle.value)
        }, [
          _ctx.$slots.label ? vue.renderSlot(_ctx.$slots, "label", { key: 0 }) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
            vue.createTextVNode(vue.toDisplayString(props.label), 1)
          ], 64))
        ], 6),
        vue.createElementVNode("div", {
          class: vue.normalizeClass([vue.unref(ucn).e("wrapper")])
        }, [
          vue.renderSlot(_ctx.$slots, "default"),
          vue.createElementVNode("div", {
            class: vue.normalizeClass([vue.unref(ucn).e("validation-message")])
          }, [
            vue.createVNode(vue.TransitionGroup, {
              name: vue.unref(index$1.useTransitionGroup)("slide-bottom")
            }, {
              default: vue.withCtx(() => [
                validateState.value === "error" ? (vue.openBlock(), vue.createElementBlock("span", {
                  key: "error",
                  class: vue.normalizeClass([vue.unref(ucn).m("error")])
                }, [
                  vue.createVNode(vue.unref(index$2.RaIcon), null, {
                    default: vue.withCtx(() => [
                      vue.createVNode(vue.unref(index$3.Error))
                    ]),
                    _: 1
                  }),
                  vue.createTextVNode(" " + vue.toDisplayString(errorValidateMessage.value), 1)
                ], 2)) : validateState.value === "success" ? (vue.openBlock(), vue.createElementBlock("span", {
                  key: "success",
                  class: vue.normalizeClass([vue.unref(ucn).m("success")])
                }, [
                  vue.createVNode(vue.unref(index$2.RaIcon), null, {
                    default: vue.withCtx(() => [
                      vue.createVNode(vue.unref(index$3.Success))
                    ]),
                    _: 1
                  }),
                  vue.createTextVNode(" " + vue.toDisplayString(successValidateMessage.value), 1)
                ], 2)) : vue.createCommentVNode("", true)
              ]),
              _: 1
            }, 8, ["name"])
          ], 2)
        ], 2)
      ], 2);
    };
  }
});
module.exports = _sfc_main;
