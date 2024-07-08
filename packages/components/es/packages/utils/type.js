import { definePropType } from "./vue/props.js";
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
const IconType = definePropType([
  String,
  Object,
  Function,
  null
]);
export {
  IconType,
  isElement,
  isNumber,
  isString
};
