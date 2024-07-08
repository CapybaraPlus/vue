import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, renderSlot, createBlock, withCtx, resolveDynamicComponent, createCommentVNode } from "vue";
import { useClassName } from "../../packages/hooks/use-classname/index.js";
import { linkProps, linkEmits } from "./link.js";
import "../../packages/theme-chalk/src/components/link.scss.js";
import { RaIcon } from "../../icon/index.js";
import { Unlink as unlink_default, ExternalLink as external_link_default, Link as link_default } from "../../node_modules/.pnpm/@capybara-plus_icons-vue@1.0.5_vue@3.4.27/node_modules/@capybara-plus/icons-vue/dist/index.js";
const _hoisted_1 = ["href", "target"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "RaLink"
  },
  __name: "link",
  props: linkProps,
  emits: linkEmits,
  setup(__props) {
    const ucn = useClassName("link");
    const $props = __props;
    const _theme = computed(() => $props.theme == "defualt" ? "" : $props.theme);
    const _disabled = computed(() => $props.disabled ? "disabled" : "");
    const _icon = computed(() => {
      if ($props.icon == "none") {
        return void 0;
      } else if ($props.icon) {
        return $props.icon;
      } else if (!$props.href) {
        return unlink_default;
      } else if ($props.target == "_blank") {
        return external_link_default;
      } else {
        return link_default;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        class: normalizeClass([unref(ucn).b(), unref(ucn).m(_theme.value), unref(ucn).is(_disabled.value)]),
        href: _ctx.disabled ? void 0 : _ctx.href,
        target: _disabled.value ? void 0 : _ctx.target,
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
      }, [
        createElementVNode("span", {
          class: normalizeClass(unref(ucn).e("inner"))
        }, [
          renderSlot(_ctx.$slots, "default"),
          _icon.value ? (openBlock(), createBlock(unref(RaIcon), {
            key: 0,
            class: normalizeClass([unref(ucn).e("icon")])
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(_icon.value)))
            ]),
            _: 1
          }, 8, ["class"])) : createCommentVNode("", true)
        ], 2)
      ], 10, _hoisted_1);
    };
  }
});
export {
  _sfc_main as default
};
