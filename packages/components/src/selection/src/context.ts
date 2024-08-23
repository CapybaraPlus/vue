import { InjectionKey, reactive, Slot } from 'vue'

let seed = 1
const _id = 'ra__selection--'

// selection option
export interface HandleOption {
  id: string
  label: string | Slot<any> | undefined
  value: any
}
// selection state
export interface SelectionState {
  options: HandleOption[]
  currentOption: HandleOption | null
  events: Map<string, Set<(data?: any) => void>>
  selectedOptions: HandleOption[]
}
// selection context
export interface SelectionContext {
  initOption: () => string
  addOption: (option: HandleOption) => void
  selectOption: (id: string) => void
  getCurrentOption: () => HandleOption | null
  getSelectedOptions: () => HandleOption[]
  on: (name: string, callback: (data?: any) => void) => void
  emit: (name: string, data?: any) => void
  clearSelected: () => void
  isSelected: (id: string) => boolean
}
// selection context key
export const selectionContextKey: InjectionKey<SelectionContext> =
  Symbol('selectionContext')

// use selection context
export function useSelectionContext(multiple: boolean): SelectionContext {
  const state = reactive<SelectionState>({
    options: [],
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
    console.log('addOption', option)
    const index = getOptionIndexById(option.id)
    if (index === -1) {
      state.options.push(option)
    } else {
      state.options.splice(index, 1, option)
    }
    console.log(state.options)
  }

  // select option by id
  function selectOption(id: string) {
    console.log(state.options)
    console.log(state.selectedOptions)

    const option = getOptionById(id)
    console.log(option)

    if (!option) return
    state.currentOption = option
    if (multiple) {
      const index = state.selectedOptions.findIndex((item) => item.id === id)
      if (index === -1) state.selectedOptions.push(option)
      else state.selectedOptions.splice(index, 1)
    }
  }

  // clear selected option
  function clearSelected() {
    state.currentOption = null
    state.selectedOptions.splice(0, state.selectedOptions.length)
  }

  // get current option
  function getCurrentOption() {
    return state.currentOption
  }

  // when multiple, get selected options
  function getSelectedOptions() {
    return Array.from(state.selectedOptions)
  }

  // option is selected
  function isSelected(id: string) {
    const option = getOptionById(id)
    if (!option) return false
    if (multiple) {
      return state.selectedOptions.findIndex((item) => item.id === id) !== -1
    } else {
      return state.currentOption?.id === option.id
    }
  }

  // get option by id
  function getOptionById(id: string) {
    return state.options.find((option) => option.id === id)
  }

  // get option index by id
  function getOptionIndexById(id: string) {
    return state.options.findIndex((option) => option.id === id)
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
    selectOption,
    initOption,
    getCurrentOption,
    getSelectedOptions,
    on,
    emit,
    clearSelected,
    isSelected,
  }
}
