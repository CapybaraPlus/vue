"use strict";
const vue = require("vue");
const input = require("./input.js");
require("../../packages/theme-chalk/src/components/input.scss.js");
const index$2 = require("../../packages/hooks/use-classname/index.js");
const index = require("../../icon/index.js");
const index$1 = require("../../node_modules/.pnpm/@capybara-plus_icons-vue@1.0.5_vue@3.4.27/node_modules/@capybara-plus/icons-vue/dist/index.js");
require("../../form/index.js");
const hooks = require("../../form/src/hooks.js");
const Input = /* @__PURE__ */ vue.defineComponent({
  name: "RaInput",
  components: {
    RaIcon: index.RaIcon,
    Close: index$1.Close
  },
  props: input.inputProps,
  emits: input.inputEmits,
  setup(props, {
    emit,
    slots,
    expose
  }) {
    const ucn = index$2.useClassName("input");
    const {
      formItemContext
    } = hooks.useFormContext();
    const inputRef = vue.ref();
    const setInputValue = () => {
      var _a;
      const input2 = inputRef.value;
      if (input2 && input2.value != props.modelValue)
        input2.value = ((_a = props.modelValue) == null ? void 0 : _a.toString()) || "";
    };
    vue.onMounted(() => {
      setInputValue();
    });
    const emitInputValue = (val) => {
      emit("update:modelValue", val);
      vue.nextTick(() => {
        setInputValue();
      });
    };
    const handleInput = (e) => {
      emit("input", e.target.value);
      if (e.target.value == props.modelValue)
        return;
      emitInputValue(e.target.value);
    };
    const handleFoucs = (e) => {
      emit("focus", e);
    };
    const handleBlur = (e) => {
      emit("blur", e);
      formItemContext == null ? void 0 : formItemContext.validate();
    };
    const handleChange = (e) => {
      emit("change", e.target.value);
    };
    const handleKeydown = (e) => {
      emit("keydown", e);
    };
    const clear = () => {
      emitInputValue("");
    };
    const clearStyle = vue.computed(() => {
      if (!props.modelValue || props.modelValue.toString().length == 0)
        return {
          opacity: 0
        };
      return {};
    });
    const showPassword = vue.ref(false);
    const inputType = vue.computed(() => {
      if (props.type == "password") {
        return showPassword.value ? "text" : "password";
      }
      return props.type;
    });
    const changePasswordVisibility = () => {
      showPassword.value = !showPassword.value;
    };
    const count = vue.computed(() => {
      if (!props.showCount)
        return null;
      if (props.modelValue === "" || props.modelValue) {
        return vue.createVNode("span", {
          "class": [ucn.e("count")]
        }, [props.modelValue.toString().length, vue.createTextVNode("/"), props.maxlength]);
      }
      return null;
    });
    const focus = () => {
      var _a;
      (_a = inputRef.value) == null ? void 0 : _a.focus();
    };
    const blur = () => {
      var _a;
      (_a = inputRef.value) == null ? void 0 : _a.blur();
    };
    const select = () => {
      var _a;
      (_a = inputRef.value) == null ? void 0 : _a.select();
    };
    expose({
      input: inputRef,
      clear,
      focus,
      blur,
      select
    });
    return () => {
      return vue.createVNode("div", {
        "class": [ucn.b(), ucn.m(props.size), ucn.is(props.disabled, "disabled"), ucn.is(props.readonly, "readonly"), ucn.is(props.theme, "theme")]
      }, [vue.createVNode("div", {
        "class": [ucn.e("wrapper")]
      }, [vue.createVNode("div", {
        "class": [ucn.e("prefix")]
      }, [slots.prefix ? slots.prefix() : null]), vue.createVNode("input", {
        "ref": inputRef,
        "class": [ucn.e("inner")],
        "placeholder": props.placeholder,
        "disabled": props.disabled,
        "readonly": props.readonly,
        "autocomplete": props.autoComplete,
        "type": inputType.value,
        "maxlength": props.maxlength,
        "minlength": props.minlength,
        "onInput": handleInput,
        "onFocus": handleFoucs,
        "onBlur": handleBlur,
        "onChange": handleChange,
        "onKeydown": handleKeydown
      }, null), vue.createVNode("div", {
        "class": [ucn.e("suffix")]
      }, [count.value, props.clearable ? vue.createVNode(vue.resolveComponent("ra-icon"), {
        "class": [ucn.e("clear")],
        "style": clearStyle.value,
        "size": ".7em",
        "onClick": clear
      }, {
        default: () => [vue.createVNode(index$1.Close, null, null)]
      }) : null, props.type == "password" ? vue.createVNode(vue.resolveComponent("ra-icon"), {
        "class": [ucn.e("password")],
        "onClick": changePasswordVisibility
      }, {
        default: () => [inputType.value == "password" ? vue.h(index$1.Hide) : vue.h(index$1.Display)]
      }) : null, slots.suffix ? slots.suffix() : null])])]);
    };
  }
});
module.exports = Input;
