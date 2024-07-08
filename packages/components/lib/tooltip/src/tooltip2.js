"use strict";
const vue = require("vue");
const tooltip = require("./tooltip.js");
const floatingUi_vue = require("../../node_modules/.pnpm/@floating-ui_vue@1.0.7_vue@3.4.27/node_modules/@floating-ui/vue/dist/floating-ui.vue.js");
const index = require("../../packages/hooks/use-classname/index.js");
require("../../packages/theme-chalk/src/components/tooltip.scss.js");
const floatingUi_dom = require("../../node_modules/.pnpm/@floating-ui_dom@1.6.6/node_modules/@floating-ui/dom/dist/floating-ui.dom.js");
const Tooltip = /* @__PURE__ */ vue.defineComponent({
  name: "RaTooltip",
  props: {
    ...tooltip.tooltipProps
  },
  setup(props, {
    slots
  }) {
    const ucn = index.useClassName("tooltip");
    const visibility = vue.ref(false);
    const referenceRef = vue.ref(null);
    const floatingRef = vue.ref(null);
    const arrowRef = vue.ref(null);
    const placement = vue.computed(() => props.placement);
    const middleware = vue.computed(() => [
      // offset must be the first middleware
      // every middleware will change the coordinate, so they should be in order
      floatingUi_dom.offset(props.offset),
      // shift the tooltip to make sure it is in the viewport
      // autoPlacemnet will automatically choose the best placement for the tooltip
      // flip the tooltip position to make sure it is in the viewport
      // see more about autoPlacement, shift and flit at https://floating-plus.com/docs/tutorial#middleware
      props.autoPlacement ? floatingUi_dom.autoPlacement() : floatingUi_dom.flip(),
      floatingUi_dom.shift(),
      floatingUi_vue.arrow({
        element: arrowRef
      })
    ]);
    const {
      floatingStyles,
      middlewareData,
      placement: floatingPlacement
    } = floatingUi_vue.useFloating(referenceRef, floatingRef, {
      whileElementsMounted: floatingUi_dom.autoUpdate,
      placement,
      middleware
    });
    const floatingArrowStyles = vue.computed(() => {
      var _a, _b;
      return {
        position: "absolute",
        left: ((_a = middlewareData.value.arrow) == null ? void 0 : _a.x) != null ? `${middlewareData.value.arrow.x}px` : "",
        top: ((_b = middlewareData.value.arrow) == null ? void 0 : _b.y) != null ? `${middlewareData.value.arrow.y}px` : "",
        [floatingPlacement.value.split("-")[0]]: "calc(100% - (var(--ra-tooltip-arrow-size) / 2))"
      };
    });
    const triggerEvents = vue.computed(() => {
      if (props.trigger === "hover") {
        return {
          onMouseenter: () => {
            visibility.value = true;
          },
          onMouseleave: () => {
            visibility.value = false;
          }
        };
      } else {
        return {
          onClick: () => {
            visibility.value = !visibility.value;
          }
        };
      }
    });
    return () => {
      var _a;
      const nodes = (_a = slots.default) == null ? void 0 : _a.call(slots);
      if (!nodes) {
        return null;
      }
      const FirstNode = nodes[0];
      function createReferenceNode() {
        return vue.h(FirstNode, {
          ref: referenceRef,
          class: ucn.m("reference"),
          ...triggerEvents.value
        });
      }
      function createFloatingNode() {
        var _a2;
        if (!visibility.value || props.disabled) {
          return null;
        }
        return vue.createVNode("div", {
          "class": [ucn.b()],
          "ref": floatingRef,
          "style": {
            ...floatingStyles.value
          }
        }, [((_a2 = slots == null ? void 0 : slots.content) == null ? void 0 : _a2.call(slots)) ?? (props == null ? void 0 : props.content), vue.createVNode("div", {
          "class": ucn.e("arrow"),
          "ref": arrowRef,
          "style": floatingArrowStyles.value
        }, null)]);
      }
      return vue.createVNode(vue.Fragment, null, [createReferenceNode(), createFloatingNode()]);
    };
  }
});
module.exports = Tooltip;
