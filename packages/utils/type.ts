import { Component } from 'vue'
import { definePropType } from './vue/props'

// is string
export const isString = (str: any): str is string => typeof str === 'string'

// is element
export const isElement = (el: any): el is Element => {
  if (typeof Element === 'undefined') {
    return false
  }
  return el instanceof Element
}

// is number
// boolean => false
// number => true
// string: '100' => true; '100px' => false
export const isNumber = (num: any): num is number => {
  if (typeof num === 'number') {
    return true
  }
  if (typeof num === 'string') {
    return /^\d+$/.test(num)
  }
  return false
}

// is function
export const isFunction = (fn: any): boolean => {
  return typeof fn === 'function'
}

// timer type
export type TimerType = ReturnType<typeof setTimeout> | undefined

// icon Type
export const IconType = definePropType<string | Component | null>([
  String,
  Object,
  Function,
  null,
])
