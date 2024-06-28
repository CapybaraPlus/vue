export const isString = (str: any): str is string => typeof str === 'string'

export const isElement = (el: any): el is Element => {
  if (typeof Element === 'undefined') {
    return false
  }
  return el instanceof Element
}
