"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const props = require("./vue/props.js");
const isString = (str) => typeof str === "string";
const isElement = (el) => {
  if (typeof Element === "undefined") {
    return false;
  }
  return el instanceof Element;
};
const isNumber = (num) => {
  if (!num)
    return false;
  if (typeof num === "boolean")
    return false;
  if (typeof num === "number") {
    return true;
  }
  return !isNaN(Number(num));
};
const IconType = props.definePropType([
  String,
  Object,
  Function,
  null
]);
exports.IconType = IconType;
exports.isElement = isElement;
exports.isNumber = isNumber;
exports.isString = isString;
