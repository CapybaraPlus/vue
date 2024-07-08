"use strict";
const vue = require("vue");
const mask = require("./mask.js");
const index = require("../../packages/hooks/use-classname/index.js");
const index$1 = require("../../packages/hooks/use-click/index.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "RaMask"
  },
  __name: "mask",
  props: mask.maskProps,
  emits: mask.maskEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const $props = __props;
    const $emit = __emit;
    const ucn = index.useClassName("mask");
    const visibility = vue.ref(false);
    function setVisibility(visible) {
      visibility.value = visible;
    }
    function open() {
      setVisibility(true);
    }
    function close() {
      setVisibility(false);
    }
    const handleClick = (e) => {
      close();
      $emit("click", e);
    };
    const { onClick, onMousedown, onMouseup } = index$1.useClick({ handleClick });
    const show = vue.computed(() => $props.show ? void 0 : "transparent");
    __expose({
      open,
      close
    });
    return (_ctx, _cache) => {
      return visibility.value ? (vue.openBlock(), vue.createElementBlock("div", {
        key: 0,
        class: vue.normalizeClass([vue.unref(ucn).b(), vue.unref(ucn).is(show.value)]),
        onClick: _cache[0] || (_cache[0] = //@ts-ignore
        (...args) => vue.unref(onClick) && vue.unref(onClick)(...args)),
        onMousedown: _cache[1] || (_cache[1] = //@ts-ignore
        (...args) => vue.unref(onMousedown) && vue.unref(onMousedown)(...args)),
        onMouseup: _cache[2] || (_cache[2] = //@ts-ignore
        (...args) => vue.unref(onMouseup) && vue.unref(onMouseup)(...args))
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 34)) : vue.createCommentVNode("", true);
    };
  }
});
module.exports = _sfc_main;
