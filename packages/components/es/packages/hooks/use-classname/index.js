const defaultNameSpace = "ra";
const generateClassName = (block, blockSuffix, element, modifier) => {
  let className = `${defaultNameSpace}-${block}`;
  if (blockSuffix) {
    className += `-${blockSuffix}`;
  }
  if (element) {
    className += `__${element}`;
  }
  if (modifier) {
    className += `--${modifier}`;
  }
  return className;
};
const useClassName = (block) => {
  const b = (blockSuffix) => generateClassName(block, blockSuffix, "", "");
  const e = (element) => element ? generateClassName(block, "", element, "") : "";
  const m = (modifier) => modifier ? generateClassName(block, "", "", modifier) : "";
  const be = (blockSuffix, element) => blockSuffix && element ? generateClassName(block, blockSuffix, element, "") : "";
  const bm = (blockSuffix, modifier) => blockSuffix && modifier ? generateClassName(block, blockSuffix, "", modifier) : "";
  const em = (element, modifier) => element && modifier ? generateClassName(block, "", element, modifier) : "";
  const bem = (blockSuffix, element, modifier) => blockSuffix && element && modifier ? generateClassName(block, blockSuffix, element, modifier) : "";
  const is = (state, name) => {
    if (typeof state === "string")
      return state ? `is-${state}` : "";
    if (typeof state === "boolean")
      return state ? `is-${name}` : "";
  };
  return {
    b,
    e,
    m,
    be,
    bm,
    em,
    bem,
    is
  };
};
export {
  useClassName
};
