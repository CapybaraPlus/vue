import { InjectionKey, reactive, type Slots } from 'vue'
import type { SelectionProps } from './selection'
import type { OptionProps } from './option'

let seed = 1
const _id = 'ra__selection--'

export interface SelectOption {
  props: SelectionProps
}

// selection option
export interface HandleOption {
  id: string
  props: OptionProps
  slots: Slots
}
// selection state
export interface SelectionState {
  handleOptions: HandleOption[]
  currentOption: HandleOption | null
  events: Map<string, Set<(data?: any) => void>>
  selectedOptions: HandleOption[]
}
// selection context
export interface SelectionContext {
  initOption: () => string
  addOption: (option: HandleOption) => void
  removeOption: (id: string) => void
  selectOption: (id: string) => void
  getCurrentOption: () => HandleOption | null
  getSelectedOptions: () => HandleOption[]
  on: (name: string, callback: (data?: any) => void) => void
  emit: (name: string, data?: any) => void
  clearSelected: () => void
  isSelected: (id: string) => boolean
  state: SelectionState
}
// selection context key
export const selectionContextKey: InjectionKey<SelectionContext> =
  Symbol('selectionContext')

// use selection context
export function useSelectionContext(option: SelectOption): SelectionContext {
  const { props } = option

  const state = reactive<SelectionState>({
    handleOptions: [],
    currentOption: null,
    events: new Map(),
    selectedOptions: [],
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
  function selectOption(id: string) {
    const handleOption = getOptionById(id)
    if (!handleOption) return
    if (handleOption.props.disabled) return
    state.currentOption = handleOption
  }

  // get current option
  function getCurrentOption() {
    return state.currentOption
  }

  // clear selected option
  function clearSelected() {
    state.currentOption = null
    state.selectedOptions.splice(0, state.selectedOptions.length)
  }

  // when props.multiple, get selected options
  function getSelectedOptions() {
    return Array.from(state.selectedOptions)
  }

  // option is selected
  function isSelected(id: string) {
    const option = getOptionById(id)
    if (!option) return false
    if (props.multiple) {
      return state.selectedOptions.findIndex((item) => item.id === id) !== -1
    } else {
      return state.currentOption?.id === option.id
    }
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
    addOption,
    removeOption,
    selectOption,
    initOption,
    getCurrentOption,
    getSelectedOptions,
    on,
    emit,
    clearSelected,
    isSelected,
    state,
  }
}
