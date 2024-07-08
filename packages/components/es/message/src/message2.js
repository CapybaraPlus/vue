import { defineComponent, ref, onMounted, computed, createVNode, Transition, resolveComponent, h, isVNode } from "vue";
import { messageProps } from "./message.js";
import { useClassName } from "../../packages/hooks/use-classname/index.js";
import { useTransition } from "../../packages/hooks/use-transition/index.js";
import { RaIcon } from "../../icon/index.js";
import { Close as close_default } from "../../node_modules/.pnpm/@capybara-plus_icons-vue@1.0.5_vue@3.4.27/node_modules/@capybara-plus/icons-vue/dist/index.js";
import "../../packages/theme-chalk/src/components/message.scss.js";
import { useResizeObserver } from "../../node_modules/.pnpm/@vueuse_core@10.11.0_vue@3.4.27/node_modules/@vueuse/core/index.js";
import { useTimeoutFn } from "../../node_modules/.pnpm/@vueuse_shared@10.11.0_vue@3.4.27/node_modules/@vueuse/shared/index.js";
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const Message = /* @__PURE__ */ defineComponent({
  name: "RaMessage",
  components: {
    RaIcon,
    Close: close_default
  },
  props: messageProps,
  setup(props, {
    expose
  }) {
    const ucn = useClassName("message");
    const visibility = ref(false);
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
      } = useTimeoutFn(() => {
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
    onMounted(() => {
      open();
      autoClose();
      instanceUtils = props.onMounted();
    });
    const messageRef = ref();
    const clientHeight = ref(0);
    useResizeObserver(messageRef, (entries) => {
      clientHeight.value = entries[0].target.clientHeight;
    });
    const offsetTop = computed(() => (instanceUtils == null ? void 0 : instanceUtils.getPrevBottom()) + (instanceUtils == null ? void 0 : instanceUtils.getGap()));
    const bottom = computed(() => offsetTop.value + clientHeight.value);
    const style = computed(() => {
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
      return createVNode(Transition, {
        "name": useTransition("slide-bottom"),
        "onBeforeLeave": props.onClose,
        "onAfterLeave": props.afterClose
      }, {
        default: () => [visibility.value ? createVNode("div", {
          "class": [ucn.b()],
          "style": style.value,
          "ref": messageRef,
          "onMouseleave": autoClose,
          "onMouseenter": clearTimer
        }, [props.icon ? createVNode(resolveComponent("ra-icon"), {
          "class": [ucn.e("icon")]
        }, _isSlot(_slot = h(props.icon)) ? _slot : {
          default: () => [_slot]
        }) : null, createVNode("span", {
          "class": [ucn.e("content")]
        }, [props.content]), createVNode(resolveComponent("ra-icon"), {
          "class": [ucn.e("close")],
          "size": ".7rem",
          "onClick": close
        }, {
          default: () => [createVNode(close_default, null, null)]
        })]) : null]
      });
    };
  }
});
export {
  Message as default
};
