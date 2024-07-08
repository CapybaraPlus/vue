const hasKey = (obj, key) => {
  return key in obj;
};
const isObject = (val) => {
  return typeof val === "object";
};
export {
  hasKey,
  isObject
};
