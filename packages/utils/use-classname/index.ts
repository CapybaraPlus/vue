const defaultNameSpace = "ra"; // 默认的类名前缀

const generateClassName = (
  block: string, // 块
  blockSuffix?: string, // 块后缀
  element?: string, // 块的子元素
  modifier?: string // 块的修饰符
) => {
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

// 当传入button时
export const useClassName = (block: string) => {
  // 生成block或者blockSuffix类名，例如：ra-button、ra-button-group
  const b = (blockSuffix?: string) => 
    generateClassName(block, blockSuffix, "", "");

  // 生成element类名，例如：ra-button__icon、ra-button__text
  const e = (element?: string) => 
    generateClassName(block, "", element, "");

  // 生成modifier类名，例如：ra-button--primary、ra-button--disabled
  const m = (modifier?: string) => 
    generateClassName(block, "", "", modifier);

  // 生成blockSuffix+element类名，例如：ra-button-group__wrapper
  const be = (blockSuffix?: string, element?: string) =>
    generateClassName(block, blockSuffix, element, "");

  // 生成blockSuffix+modifier类名，例如：ra-button-group--primary
  const bm = (blockSuffix?: string, modifier?: string) =>
    generateClassName(block, blockSuffix, "", modifier);

  // 生成bem类名，例如：ra-button__icon--left
  const em = (element?: string, modifier?: string) =>
    generateClassName(block, "", element, modifier);

  // 生成blockSuffix+em类名，例如：ra-button-group__icon--left
  const bem = (blockSuffix?: string, element?: string, modifier?: string) =>
    generateClassName(block, blockSuffix, element, modifier);

  return {
    b,
    e,
    m,
    be,
    bm,
    em,
    bem,
  };
};
