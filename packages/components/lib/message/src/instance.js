"use strict";
const vue = require("vue");
const message = require("./message2.js");
const id = require("../../packages/utils/id.js");
const type = require("../../packages/utils/type.js");
const index = require("../../node_modules/.pnpm/@capybara-plus_icons-vue@1.0.5_vue@3.4.27/node_modules/@capybara-plus/icons-vue/dist/index.js");
let OFFSET;
let GAP;
function normalizeOptions(options) {
  let appendTo = document.body;
  if (type.isString(options.appendTo)) {
    appendTo = document.querySelector(options.appendTo);
  }
  if (!type.isElement(appendTo)) {
    console.warn(
      "message appendTo is not a valid element, use document.body instead"
    );
    appendTo = document.body;
  }
  OFFSET = options.offset ?? 20;
  GAP = options.gap ?? 20;
  const iconMapTheme = {
    default: null,
    success: index.Success,
    warning: index.Warning,
    error: index.Error
  };
  const icon = options.icon ?? iconMapTheme[options.theme ?? "default"];
  return {
    ...options,
    duration: options.duration ?? 3e3,
    autoCloseTimer: void 0,
    _id: id.createId("ra-message"),
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
      vue.render(null, container);
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
  const messageVNode = vue.h(message, props);
  if (normalized.appContext) {
    messageVNode.appContext = normalized.appContext;
  }
  vue.render(messageVNode, container);
  appendTo.appendChild(container.firstChild);
  function getInstance() {
    const targetIndex = messageQueue.findIndex(
      (message2) => message2._id === instance._id
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
const messageQueue = vue.shallowReactive([]);
const callMessage = (options) => {
  const instance = createMessage(options);
  if (messageQueue.length >= 3) {
    messageQueue[0].exposed.close();
  }
  messageQueue.push(instance);
};
module.exports = callMessage;
