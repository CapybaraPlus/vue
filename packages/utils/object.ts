// check whether the object has the key
export const hasKey = (obj: Record<string, any>, key: string) => {
  return key in obj
}

// check whether the value is object
export const isObject = (val: any) => {
  return typeof val === 'object'
}
