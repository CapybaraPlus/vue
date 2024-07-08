import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, renderSlot } from "vue";
import { useClassName } from "../../packages/hooks/use-classname/index.js";
import "../../packages/theme-chalk/src/components/icon.scss.js";
import { iconProps, iconEmits } from "./icon.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "RaIcon"
  },
  __name: "icon",
  props: iconProps,
  emits: iconEmits,
  setup(__props) {
    const ucn = useClassName("icon");
    const $props = __props;
    const style = computed(() => {
      return {
        color: $props.color,
        fontSize: $props.size
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("i", {
        class: normalizeClass([unref(ucn).b()]),
        style: normalizeStyle(style.value),
        onClick: _cache[0] || (_cache[0] = (e) => _ctx.$emit("click", e))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 6);
    };
  }
});
export {
  _sfc_main as default
};
