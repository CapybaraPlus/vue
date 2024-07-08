"use strict";
const vue = require("vue");
const index$2 = require("../../packages/hooks/use-classname/index.js");
const link = require("./link.js");
require("../../packages/theme-chalk/src/components/link.scss.js");
const index$1 = require("../../icon/index.js");
const index = require("../../node_modules/.pnpm/@capybara-plus_icons-vue@1.0.5_vue@3.4.27/node_modules/@capybara-plus/icons-vue/dist/index.js");
const _hoisted_1 = ["href", "target"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "RaLink"
  },
  __name: "link",
  props: link.linkProps,
  emits: link.linkEmits,
  setup(__props) {
    const ucn = index$2.useClassName("link");
    const $props = __props;
    const _theme = vue.computed(() => $props.theme == "defualt" ? "" : $props.theme);
    const _disabled = vue.computed(() => $props.disabled ? "disabled" : "");
    const _icon = vue.computed(() => {
      if ($props.icon == "none") {
        return void 0;
      } else if ($props.icon) {
        return $props.icon;
      } else if (!$props.href) {
        return index.Unlink;
      } else if ($props.target == "_blank") {
        return index.ExternalLink;
      } else {
        return index.Link;
      }
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("a", {
        class: vue.normalizeClass([vue.unref(ucn).b(), vue.unref(ucn).m(_theme.value), vue.unref(ucn).is(_disabled.value)]),
        href: _ctx.disabled ? void 0 : _ctx.href,
        target: _disabled.value ? void 0 : _ctx.target,
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
      }, [
        vue.createElementVNode("span", {
          class: vue.normalizeClass(vue.unref(ucn).e("inner"))
        }, [
          vue.renderSlot(_ctx.$slots, "default"),
          _icon.value ? (vue.openBlock(), vue.createBlock(vue.unref(index$1.RaIcon), {
            key: 0,
            class: vue.normalizeClass([vue.unref(ucn).e("icon")])
          }, {
            default: vue.withCtx(() => [
              (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_icon.value)))
            ]),
            _: 1
          }, 8, ["class"])) : vue.createCommentVNode("", true)
        ], 2)
      ], 10, _hoisted_1);
    };
  }
});
module.exports = _sfc_main;
