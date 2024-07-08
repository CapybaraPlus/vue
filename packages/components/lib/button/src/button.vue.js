"use strict";
const vue = require("vue");
const index = require("../../packages/hooks/use-classname/index.js");
const button = require("./button.js");
require("../../packages/theme-chalk/src/components/button.scss.js");
const _hoisted_1 = ["disabled", "type"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "RaButton"
  },
  __name: "button",
  props: button.buttonProps,
  emits: button.buttonEmits,
  setup(__props, { emit: __emit }) {
    const ucn = index.useClassName("button");
    const $props = __props;
    const $emit = __emit;
    const handleClick = (e) => {
      $emit("click", e);
    };
    const _theme = vue.computed(
      () => $props.theme == "default" || $props.color ? "" : $props.theme
    );
    const _size = vue.computed(() => $props.size == "normal" ? "" : $props.size);
    const _disabled = vue.computed(() => $props.disabled ? "disabled" : void 0);
    const _shape = vue.computed(
      () => $props.shape == "default" ? void 0 : $props.shape
    );
    const _block = vue.computed(() => $props.block ? "block" : void 0);
    const _color = vue.computed(() => {
      const cls = $props.color ? "color" : "";
      const style = `--color: ${$props.color}`;
      return {
        cls,
        style
      };
    });
    const _hoverAnimation = vue.computed(
      () => $props.hoverAnimation ? `hover-${$props.hoverAnimation}` : void 0
    );
    const _activeAnimation = vue.computed(
      () => $props.activeAnimation ? `active-${$props.activeAnimation}` : ""
    );
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("button", {
        class: vue.normalizeClass([
          vue.unref(ucn).b(),
          vue.unref(ucn).m(_theme.value),
          vue.unref(ucn).m(_size.value),
          vue.unref(ucn).is(_disabled.value),
          vue.unref(ucn).m(_shape.value),
          vue.unref(ucn).is(_block.value),
          vue.unref(ucn).is(_color.value.cls),
          _hoverAnimation.value,
          _activeAnimation.value
        ]),
        disabled: _ctx.disabled,
        type: _ctx.type,
        style: vue.normalizeStyle([_color.value.style]),
        onClick: handleClick
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 14, _hoisted_1);
    };
  }
});
module.exports = _sfc_main;
