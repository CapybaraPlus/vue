"use strict";
const vue = require("vue");
const message = require("./message.js");
const index$4 = require("../../packages/hooks/use-classname/index.js");
const index$3 = require("../../packages/hooks/use-transition/index.js");
const index = require("../../icon/index.js");
const index$1 = require("../../node_modules/.pnpm/@capybara-plus_icons-vue@1.0.5_vue@3.4.27/node_modules/@capybara-plus/icons-vue/dist/index.js");
require("../../packages/theme-chalk/src/components/message.scss.js");
const index$2 = require("../../node_modules/.pnpm/@vueuse_core@10.11.0_vue@3.4.27/node_modules/@vueuse/core/index.js");
const index$5 = require("../../node_modules/.pnpm/@vueuse_shared@10.11.0_vue@3.4.27/node_modules/@vueuse/shared/index.js");
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !vue.isVNode(s);
}
const Message = /* @__PURE__ */ vue.defineComponent({
  name: "RaMessage",
  components: {
    RaIcon: index.RaIcon,
    Close: index$1.Close
  },
  props: message.messageProps,
  setup(props, {
    expose
  }) {
    const ucn = index$4.useClassName("message");
    const visibility = vue.ref(false);
    let stopTimer;
    function open() {
      visibility.value = true;
    }
    function close() {
      visibility.value = false;
    }
    function autoClose() {
      if (props.duration <= 0)
        return;
      const {
        stop
      } = index$5.useTimeoutFn(() => {
        close();
      }, props.duration);
      stopTimer = () => {
        stop == null ? void 0 : stop();
      };
    }
    function clearTimer() {
      stopTimer == null ? void 0 : stopTimer();
    }
    let instanceUtils;
    vue.onMounted(() => {
      open();
      autoClose();
      instanceUtils = props.onMounted();
    });
    const messageRef = vue.ref();
    const clientHeight = vue.ref(0);
    index$2.useResizeObserver(messageRef, (entries) => {
      clientHeight.value = entries[0].target.clientHeight;
    });
    const offsetTop = vue.computed(() => (instanceUtils == null ? void 0 : instanceUtils.getPrevBottom()) + (instanceUtils == null ? void 0 : instanceUtils.getGap()));
    const bottom = vue.computed(() => offsetTop.value + clientHeight.value);
    const style = vue.computed(() => {
      return {
        top: `${offsetTop.value}px`,
        zIndex: `${props.zIndex}`
      };
    });
    const exposed = {
      close,
      bottom,
      offsetTop
    };
    expose(exposed);
    return () => {
      let _slot;
      return vue.createVNode(vue.Transition, {
        "name": index$3.useTransition("slide-bottom"),
        "onBeforeLeave": props.onClose,
        "onAfterLeave": props.afterClose
      }, {
        default: () => [visibility.value ? vue.createVNode("div", {
          "class": [ucn.b()],
          "style": style.value,
          "ref": messageRef,
          "onMouseleave": autoClose,
          "onMouseenter": clearTimer
        }, [props.icon ? vue.createVNode(vue.resolveComponent("ra-icon"), {
          "class": [ucn.e("icon")]
        }, _isSlot(_slot = vue.h(props.icon)) ? _slot : {
          default: () => [_slot]
        }) : null, vue.createVNode("span", {
          "class": [ucn.e("content")]
        }, [props.content]), vue.createVNode(vue.resolveComponent("ra-icon"), {
          "class": [ucn.e("close")],
          "size": ".7rem",
          "onClick": close
        }, {
          default: () => [vue.createVNode(index$1.Close, null, null)]
        })]) : null]
      });
    };
  }
});
module.exports = Message;
