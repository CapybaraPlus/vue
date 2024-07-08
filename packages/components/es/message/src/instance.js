import { shallowReactive, render, h } from "vue";
import Message from "./message2.js";
import { createId } from "../../packages/utils/id.js";
import { isString, isElement } from "../../packages/utils/type.js";
import { Success as success_default, Warning as warning_default, Error as error_default } from "../../node_modules/.pnpm/@capybara-plus_icons-vue@1.0.5_vue@3.4.27/node_modules/@capybara-plus/icons-vue/dist/index.js";
let OFFSET;
let GAP;
function normalizeOptions(options) {
  let appendTo = document.body;
  if (isString(options.appendTo)) {
    appendTo = document.querySelector(options.appendTo);
  }
  if (!isElement(appendTo)) {
    console.warn(
      "message appendTo is not a valid element, use document.body instead"
    );
    appendTo = document.body;
  }
  OFFSET = options.offset ?? 20;
  GAP = options.gap ?? 20;
  const iconMapTheme = {
    default: null,
    success: success_default,
    warning: warning_default,
    error: error_default
  };
  const icon = options.icon ?? iconMapTheme[options.theme ?? "default"];
  return {
    ...options,
    duration: options.duration ?? 3e3,
    autoCloseTimer: void 0,
    _id: createId("ra-message"),
    appendTo,
    icon,
    offset: OFFSET
  };
}
function createMessage(options) {
  const { appendTo, ...normalized } = normalizeOptions(options);
  const props = {
    ...normalized,
    onClose: () => {
      var _a;
      (_a = normalized.onClose) == null ? void 0 : _a.call(normalized);
      closeMessage(instance);
    },
    afterClose: () => {
      render(null, container);
    },
    onMounted: () => {
      const messageInstancUtils = {
        getInstance,
        getPrevBottom,
        getGap
      };
      return messageInstancUtils;
    }
  };
  const container = document.createElement("div");
  const messageVNode = h(Message, props);
  if (normalized.appContext) {
    messageVNode.appContext = normalized.appContext;
  }
  render(messageVNode, container);
  appendTo.appendChild(container.firstChild);
  function getInstance() {
    const targetIndex = messageQueue.findIndex(
      (message) => message._id === instance._id
    );
    const target = messageQueue[targetIndex];
    let prev;
    if (targetIndex > 0) {
      prev = messageQueue[targetIndex - 1];
    }
    return {
      prev,
      target,
      targetIndex
    };
  }
  function getPrevBottom() {
    const { prev } = getInstance();
    return prev ? prev.exposed.bottom.value : OFFSET;
  }
  function getGap() {
    const { targetIndex } = getInstance();
    if (targetIndex <= 0)
      return 0;
    return GAP;
  }
  function closeMessage(instance2) {
    const { targetIndex } = getInstance();
    if (targetIndex != -1)
      messageQueue.splice(targetIndex, 1);
    instance2.exposed.close();
  }
  const instance = {
    _id: normalized._id,
    exposed: messageVNode.component.exposed
  };
  return instance;
}
const messageQueue = shallowReactive([]);
const callMessage = (options) => {
  const instance = createMessage(options);
  if (messageQueue.length >= 3) {
    messageQueue[0].exposed.close();
  }
  messageQueue.push(instance);
};
export {
  callMessage as default
};
