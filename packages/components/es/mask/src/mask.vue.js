import { defineComponent, ref, computed, openBlock, createElementBlock, normalizeClass, unref, renderSlot, createCommentVNode } from "vue";
import { maskProps, maskEmits } from "./mask.js";
import { useClassName } from "../../packages/hooks/use-classname/index.js";
import { useClick } from "../../packages/hooks/use-click/index.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "RaMask"
  },
  __name: "mask",
  props: maskProps,
  emits: maskEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const $props = __props;
    const $emit = __emit;
    const ucn = useClassName("mask");
    const visibility = ref(false);
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
    const { onClick, onMousedown, onMouseup } = useClick({ handleClick });
    const show = computed(() => $props.show ? void 0 : "transparent");
    __expose({
      open,
      close
    });
    return (_ctx, _cache) => {
      return visibility.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass([unref(ucn).b(), unref(ucn).is(show.value)]),
        onClick: _cache[0] || (_cache[0] = //@ts-ignore
        (...args) => unref(onClick) && unref(onClick)(...args)),
        onMousedown: _cache[1] || (_cache[1] = //@ts-ignore
        (...args) => unref(onMousedown) && unref(onMousedown)(...args)),
        onMouseup: _cache[2] || (_cache[2] = //@ts-ignore
        (...args) => unref(onMouseup) && unref(onMouseup)(...args))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 34)) : createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main as default
};
