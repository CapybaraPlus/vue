"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const groupPrefix = "group__";
function useTransition(name) {
  return name;
}
function useTransitionGroup(name) {
  return `${groupPrefix}${name}`;
}
exports.useTransition = useTransition;
exports.useTransitionGroup = useTransitionGroup;
