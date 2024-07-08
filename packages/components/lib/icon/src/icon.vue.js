"use strict";
const vue = require("vue");
const index = require("../../packages/hooks/use-classname/index.js");
require("../../packages/theme-chalk/src/components/icon.scss.js");
const icon = require("./icon.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "RaIcon"
  },
  __name: "icon",
  props: icon.iconProps,
  emits: icon.iconEmits,
  setup(__props) {
    const ucn = index.useClassName("icon");
    const $props = __props;
    const style = vue.computed(() => {
      return {
        color: $props.color,
        fontSize: $props.size
      };
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("i", {
        class: vue.normalizeClass([vue.unref(ucn).b()]),
        style: vue.normalizeStyle(style.value),
        onClick: _cache[0] || (_cache[0] = (e) => _ctx.$emit("click", e))
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 6);
    };
  }
});
module.exports = _sfc_main;
