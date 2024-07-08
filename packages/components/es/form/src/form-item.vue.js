import { defineComponent, inject, ref, computed, reactive, toRefs, provide, onMounted, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, normalizeStyle, renderSlot, Fragment, createTextVNode, toDisplayString, createVNode, TransitionGroup, withCtx, createCommentVNode } from "vue";
import { useClassName } from "../../packages/hooks/use-classname/index.js";
import { useTransitionGroup } from "../../packages/hooks/use-transition/index.js";
import { formItemProps, FormContextKey, FormItemId, FormItemContextKey } from "./form.js";
import { useResizeObserver } from "../../node_modules/.pnpm/@vueuse_core@10.11.0_vue@3.4.27/node_modules/@vueuse/core/index.js";
import Schema from "../../node_modules/.pnpm/async-validator@4.2.5/node_modules/async-validator/dist-web/index.js";
import { RaIcon } from "../../icon/index.js";
import { Error as error_default, Success as success_default } from "../../node_modules/.pnpm/@capybara-plus_icons-vue@1.0.5_vue@3.4.27/node_modules/@capybara-plus/icons-vue/dist/index.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "RaFormItem"
  },
  __name: "form-item",
  props: formItemProps,
  setup(__props) {
    const props = __props;
    const ucn = useClassName("form-item");
    const formContext = inject(FormContextKey, void 0);
    const labelRef = ref();
    useResizeObserver(labelRef, (entries) => {
      formContext == null ? void 0 : formContext.registerLabelWidth(entries[0].target.clientWidth);
    });
    const labelStyle = computed(() => {
      return {
        minWidth: (formContext == null ? void 0 : formContext.labelWidth) + "px"
        // ref in the reactive object will be wrapped
      };
    });
    const validateState = ref("pending");
    function changeValidateState(state) {
      validateState.value = state;
    }
    function resetValidateState() {
      changeValidateState("pending");
    }
    const successValidateMessage = ref("");
    function onValidateSuccess() {
      var _a;
      changeValidateState("success");
      successValidateMessage.value = ((_a = currentRule.value) == null ? void 0 : _a.successMessage) ?? "";
    }
    const errorValidateMessage = ref("");
    function onValidateError(error) {
      var _a, _b;
      changeValidateState("error");
      const { errors } = error;
      if ((_a = currentRule.value) == null ? void 0 : _a.errorMessage) {
        errorValidateMessage.value = currentRule.value.errorMessage;
      }
      errorValidateMessage.value = errors ? errors[0].message ? ((_b = currentRule.value) == null ? void 0 : _b.errorMessage) ?? errors[0].message : `${props.prop} is required` : "";
    }
    const currentRule = computed(() => {
      var _a;
      return (_a = formContext == null ? void 0 : formContext.rules) == null ? void 0 : _a[props.prop];
    });
    function validate() {
      if (!props.prop || !currentRule.value)
        return;
      const value = formContext == null ? void 0 : formContext.model[props.prop];
      const validator = new Schema({
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
    const context = reactive({
      ...toRefs(props),
      validate,
      resetValidateState,
      _id: FormItemId()
    });
    provide(FormItemContextKey, reactive(context));
    onMounted(() => {
      formContext == null ? void 0 : formContext.registerFormItemContext(context);
    });
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(ucn).b(), unref(ucn).is((_a = currentRule.value) == null ? void 0 : _a.required, "required")])
      }, [
        createElementVNode("label", {
          ref_key: "labelRef",
          ref: labelRef,
          class: normalizeClass([unref(ucn).e("label")]),
          style: normalizeStyle(labelStyle.value)
        }, [
          _ctx.$slots.label ? renderSlot(_ctx.$slots, "label", { key: 0 }) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createTextVNode(toDisplayString(props.label), 1)
          ], 64))
        ], 6),
        createElementVNode("div", {
          class: normalizeClass([unref(ucn).e("wrapper")])
        }, [
          renderSlot(_ctx.$slots, "default"),
          createElementVNode("div", {
            class: normalizeClass([unref(ucn).e("validation-message")])
          }, [
            createVNode(TransitionGroup, {
              name: unref(useTransitionGroup)("slide-bottom")
            }, {
              default: withCtx(() => [
                validateState.value === "error" ? (openBlock(), createElementBlock("span", {
                  key: "error",
                  class: normalizeClass([unref(ucn).m("error")])
                }, [
                  createVNode(unref(RaIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(error_default))
                    ]),
                    _: 1
                  }),
                  createTextVNode(" " + toDisplayString(errorValidateMessage.value), 1)
                ], 2)) : validateState.value === "success" ? (openBlock(), createElementBlock("span", {
                  key: "success",
                  class: normalizeClass([unref(ucn).m("success")])
                }, [
                  createVNode(unref(RaIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(success_default))
                    ]),
                    _: 1
                  }),
                  createTextVNode(" " + toDisplayString(successValidateMessage.value), 1)
                ], 2)) : createCommentVNode("", true)
              ]),
              _: 1
            }, 8, ["name"])
          ], 2)
        ], 2)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
