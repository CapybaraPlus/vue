import { defineComponent, ref, onMounted, computed, createVNode, createTextVNode, resolveComponent, h, nextTick } from "vue";
import { inputProps, inputEmits } from "./input.js";
import "../../packages/theme-chalk/src/components/input.scss.js";
import { useClassName } from "../../packages/hooks/use-classname/index.js";
import { RaIcon } from "../../icon/index.js";
import { Close as close_default, Hide as hide_default, Display as display_default } from "../../node_modules/.pnpm/@capybara-plus_icons-vue@1.0.5_vue@3.4.27/node_modules/@capybara-plus/icons-vue/dist/index.js";
import "../../form/index.js";
import { useFormContext } from "../../form/src/hooks.js";
const Input = /* @__PURE__ */ defineComponent({
  name: "RaInput",
  components: {
    RaIcon,
    Close: close_default
  },
  props: inputProps,
  emits: inputEmits,
  setup(props, {
    emit,
    slots,
    expose
  }) {
    const ucn = useClassName("input");
    const {
      formItemContext
    } = useFormContext();
    const inputRef = ref();
    const setInputValue = () => {
      var _a;
      const input = inputRef.value;
      if (input && input.value != props.modelValue)
        input.value = ((_a = props.modelValue) == null ? void 0 : _a.toString()) || "";
    };
    onMounted(() => {
      setInputValue();
    });
    const emitInputValue = (val) => {
      emit("update:modelValue", val);
      nextTick(() => {
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
    const clearStyle = computed(() => {
      if (!props.modelValue || props.modelValue.toString().length == 0)
        return {
          opacity: 0
        };
      return {};
    });
    const showPassword = ref(false);
    const inputType = computed(() => {
      if (props.type == "password") {
        return showPassword.value ? "text" : "password";
      }
      return props.type;
    });
    const changePasswordVisibility = () => {
      showPassword.value = !showPassword.value;
    };
    const count = computed(() => {
      if (!props.showCount)
        return null;
      if (props.modelValue === "" || props.modelValue) {
        return createVNode("span", {
          "class": [ucn.e("count")]
        }, [props.modelValue.toString().length, createTextVNode("/"), props.maxlength]);
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
      return createVNode("div", {
        "class": [ucn.b(), ucn.m(props.size), ucn.is(props.disabled, "disabled"), ucn.is(props.readonly, "readonly"), ucn.is(props.theme, "theme")]
      }, [createVNode("div", {
        "class": [ucn.e("wrapper")]
      }, [createVNode("div", {
        "class": [ucn.e("prefix")]
      }, [slots.prefix ? slots.prefix() : null]), createVNode("input", {
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
      }, null), createVNode("div", {
        "class": [ucn.e("suffix")]
      }, [count.value, props.clearable ? createVNode(resolveComponent("ra-icon"), {
        "class": [ucn.e("clear")],
        "style": clearStyle.value,
        "size": ".7em",
        "onClick": clear
      }, {
        default: () => [createVNode(close_default, null, null)]
      }) : null, props.type == "password" ? createVNode(resolveComponent("ra-icon"), {
        "class": [ucn.e("password")],
        "onClick": changePasswordVisibility
      }, {
        default: () => [inputType.value == "password" ? h(hide_default) : h(display_default)]
      }) : null, slots.suffix ? slots.suffix() : null])])]);
    };
  }
});
export {
  Input as default
};
