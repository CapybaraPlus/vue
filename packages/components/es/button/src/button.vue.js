import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, renderSlot } from "vue";
import { useClassName } from "../../packages/hooks/use-classname/index.js";
import { buttonProps, buttonEmits } from "./button.js";
import "../../packages/theme-chalk/src/components/button.scss.js";
const _hoisted_1 = ["disabled", "type"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "RaButton"
  },
  __name: "button",
  props: buttonProps,
  emits: buttonEmits,
  setup(__props, { emit: __emit }) {
    const ucn = useClassName("button");
    const $props = __props;
    const $emit = __emit;
    const handleClick = (e) => {
      $emit("click", e);
    };
    const _theme = computed(
      () => $props.theme == "default" || $props.color ? "" : $props.theme
    );
    const _size = computed(() => $props.size == "normal" ? "" : $props.size);
    const _disabled = computed(() => $props.disabled ? "disabled" : void 0);
    const _shape = computed(
      () => $props.shape == "default" ? void 0 : $props.shape
    );
    const _block = computed(() => $props.block ? "block" : void 0);
    const _color = computed(() => {
      const cls = $props.color ? "color" : "";
      const style = `--color: ${$props.color}`;
      return {
        cls,
        style
      };
    });
    const _hoverAnimation = computed(
      () => $props.hoverAnimation ? `hover-${$props.hoverAnimation}` : void 0
    );
    const _activeAnimation = computed(
      () => $props.activeAnimation ? `active-${$props.activeAnimation}` : ""
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass([
          unref(ucn).b(),
          unref(ucn).m(_theme.value),
          unref(ucn).m(_size.value),
          unref(ucn).is(_disabled.value),
          unref(ucn).m(_shape.value),
          unref(ucn).is(_block.value),
          unref(ucn).is(_color.value.cls),
          _hoverAnimation.value,
          _activeAnimation.value
        ]),
        disabled: _ctx.disabled,
        type: _ctx.type,
        style: normalizeStyle([_color.value.style]),
        onClick: handleClick
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 14, _hoisted_1);
    };
  }
});
export {
  _sfc_main as default
};
