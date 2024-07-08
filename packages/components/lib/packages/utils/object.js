"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const hasKey = (obj, key) => {
  return key in obj;
};
const isObject = (val) => {
  return typeof val === "object";
};
exports.hasKey = hasKey;
exports.isObject = isObject;
