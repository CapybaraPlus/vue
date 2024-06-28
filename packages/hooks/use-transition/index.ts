type Transitions = 'slide-bottom'

const groupPrefix = 'group__'

export function useTransition(name: Transitions) {
  return name
}

export function useTransitionGroup(name: Transitions) {
  return `${groupPrefix}${name}`
}
