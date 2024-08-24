import { InjectionKey, reactive } from 'vue'
import type { SelectionProps } from './selection'
import type { OptionProps } from './option'

let seed = 1
const _id = 'ra__selection--'

// selection context key
export const selectionContextKey: InjectionKey<SelectionContext> =
  Symbol('selectionContext')

// input params
export interface SelectOption {
  props: SelectionProps
}
// selection option
export interface HandleOption {
  id: string
  props: OptionProps
}
// selection state
export interface SelectionState {
  handleOptions: HandleOption[]
  currentOption: HandleOption | null
  events: Map<string, Set<(data?: any) => void>>
  multipleOptions: HandleOption[]
  currentFocusIndex: number
}
// selection context
export interface SelectionContext {
  initOption: () => string
  addOption: (option: HandleOption) => void
  removeOption: (id: string) => void
  selectOption: (id?: string) => void
  getCurrentOption: () => HandleOption | null
  getMultipleOptions: () => HandleOption[]
  on: (name: string, callback: (data?: any) => void) => void
  emit: (name: string, data?: any) => void
  clearSelected: () => void
  isSelected: (id: string) => boolean
  isFocused: (id: string) => boolean
  moveIndex: (index: number) => void
}

// use selection context
export function useSelectionContext(option: SelectOption): SelectionContext {
  const { props } = option

  const state = reactive<SelectionState>({
    handleOptions: [],
    currentOption: null,
    events: new Map(),
    multipleOptions: [],
    currentFocusIndex: -1,
  })

  // init option
  function initOption(): string {
    return `${_id}${seed++}`
  }

  // push option
  function addOption(option: HandleOption) {
    state.handleOptions.push(option)
  }

  // remove option
  function removeOption(id: string) {
    const index = getOptionIndexById(id)
    if (index !== -1) state.handleOptions.splice(index, 1)
  }

  // select option by id
  function selectOption(id?: string) {
    // enter keydown
    if (!id) {
      id = state.handleOptions[state.currentFocusIndex]?.id
    }
    const handleOption = getOptionById(id)
    if (!handleOption) return
    if (props.multiple) {
      const index = state.multipleOptions.findIndex((item) => item.id === id)
      if (index === -1) state.multipleOptions.push(handleOption)
      else state.multipleOptions.splice(index, 1)
    }
    state.currentOption = handleOption
  }

  // get current option
  function getCurrentOption() {
    return state.currentOption
  }

  // clear selected option
  function clearSelected() {
    state.currentOption = null
    state.multipleOptions.splice(0, state.multipleOptions.length)
  }

  // when props.multiple, get selected options
  function getMultipleOptions() {
    return state.multipleOptions
  }

  // option is selected
  function isSelected(id: string) {
    const option = getOptionById(id)
    if (!option) return false
    if (props.multiple) {
      return state.multipleOptions.findIndex((item) => item.id === id) !== -1
    } else {
      return state.currentOption?.id === option.id
    }
  }

  function moveIndex(index: number) {
    state.currentFocusIndex += index
    // boundary check
    if (state.currentFocusIndex < 0) {
      state.currentFocusIndex = state.handleOptions.length - 1
    } else if (state.currentFocusIndex >= state.handleOptions.length) {
      state.currentFocusIndex = 0
    }
    const target = state.handleOptions[state.currentFocusIndex]
    // skip disabled option
    if (target.props.disabled) {
      moveIndex(index)
    }
  }

  // option is focused
  function isFocused(id: string) {
    const index = getOptionIndexById(id)
    return state.currentFocusIndex === index
  }

  // get option by id
  function getOptionById(id: string) {
    return state.handleOptions.find((option) => option.id === id)
  }

  // get option index by id
  function getOptionIndexById(id: string) {
    return state.handleOptions.findIndex((option) => option.id === id)
  }

  // subscribe
  function on(name: string, callback: () => void) {
    let set = state.events.get(name)
    if (!set) {
      state.events.set(name, (set = new Set()))
    }
    set.add(callback)
  }

  // trigger
  function emit(name: string, data?: any) {
    const set = state.events.get(name)
    if (!set) return
    set.forEach((fn) => fn(data))
  }

  return {
    initOption,
    addOption,
    removeOption,
    selectOption,
    getCurrentOption,
    getMultipleOptions,
    on,
    emit,
    clearSelected,
    isSelected,
    moveIndex,
    isFocused,
  }
}
