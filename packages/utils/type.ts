import { Component } from 'vue'
import { definePropType } from './vue/props'

export const isString = (str: any): str is string => typeof str === 'string'

export const isElement = (el: any): el is Element => {
  if (typeof Element === 'undefined') {
    return false
  }
  return el instanceof Element
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
