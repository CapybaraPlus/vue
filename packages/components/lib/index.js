"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const index = require("./button/index.js");
const index$1 = require("./link/index.js");
const index$2 = require("./icon/index.js");
const index$3 = require("./tooltip/index.js");
const index$4 = require("./mask/index.js");
const index$5 = require("./message/index.js");
const index$6 = require("./input/index.js");
const index$7 = require("./form/index.js");
const plugins = [
  index.RaButton,
  index$1.RaLink,
  index$2.RaIcon,
  index$3.RaTooltip,
  index$4.RaMask,
  index$5.RaMessage,
  index$6.RaInput,
  index$7.RaForm,
  index$7.RaFormItem
];
exports.RaButton = index.RaButton;
exports.RaLink = index$1.RaLink;
exports.RaIcon = index$2.RaIcon;
exports.RaTooltip = index$3.RaTooltip;
exports.RaMask = index$4.RaMask;
exports.RaMessage = index$5.RaMessage;
exports.RaInput = index$6.RaInput;
exports.RaForm = index$7.RaForm;
exports.RaFormItem = index$7.RaFormItem;
exports.plugins = plugins;
