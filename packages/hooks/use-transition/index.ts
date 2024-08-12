const prefix = 'ra__'
const suffix = '__transition'
const groupPrefix = 'group--'

export function useTransition(name: string) {
  return `${prefix}${name}${suffix}`
}

export function useTransitionGroup(name: string) {
  return `${groupPrefix}${useTransition(name)}`
}
