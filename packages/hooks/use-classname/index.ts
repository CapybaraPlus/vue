const defaultNameSpace = 'ra' // default namespace

const generateClassName = (
  block: string,
  blockSuffix?: string,
  element?: string,
  modifier?: string
) => {
  let className = `${defaultNameSpace}-${block}`
  if (blockSuffix) {
    className += `-${blockSuffix}`
  }
  if (element) {
    className += `__${element}`
  }
  if (modifier) {
    className += `--${modifier}`
  }
  return className
}

// when block is button
export const useClassName = (block: string) => {
  // generate block or block-suffix class name such as ra-button、ra-button-group
  const b = (blockSuffix?: string) =>
    generateClassName(block, blockSuffix, '', '')

  // generate element class name such as ra-button__icon、ra-button__text
  const e = (element?: string) =>
    element ? generateClassName(block, '', element, '') : ''

  // generate modifier class name such as ra-button--primary、ra-button--disabled
  const m = (modifier?: string) =>
    modifier ? generateClassName(block, '', '', modifier) : ''

  // generate block-suffix and element class name such as ra-button-group__wrapper
  const be = (blockSuffix?: string, element?: string) =>
    blockSuffix && element
      ? generateClassName(block, blockSuffix, element, '')
      : ''

  // generate block-suffix and modifierclass name such as ra-button-group--primary
  const bm = (blockSuffix?: string, modifier?: string) =>
    blockSuffix && modifier
      ? generateClassName(block, blockSuffix, '', modifier)
      : ''

  // generate bem class name such as ra-button__icon--left
  const em = (element?: string, modifier?: string) =>
    element && modifier ? generateClassName(block, '', element, modifier) : ''

  // generate block-suffix and em class name such as ra-button-group__icon--left
  const bem = (blockSuffix?: string, element?: string, modifier?: string) =>
    blockSuffix && element && modifier
      ? generateClassName(block, blockSuffix, element, modifier)
      : ''

  // generate state class name
  const is = (state?: string | boolean, name?: string) => {
    if (typeof state === 'string') return state ? `is-${state}` : ''
    if (typeof state === 'boolean') return state ? `is-${name}` : ''
  }

  return {
    b,
    e,
    m,
    be,
    bm,
    em,
    bem,
    is,
  }
}
