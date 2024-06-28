import { v4 as uuid } from 'uuid'

export const createId = (prefix?: string) => {
  return `${prefix}__${uuid()}`
}
