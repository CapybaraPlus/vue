import { InjectionKey, reactive, Slot } from 'vue'

let seed = 1
const _id = 'ra__selection--'

export type OptionsLabel = string | Slot<any> | undefined
// selection option
export interface HandleOption {
  label: OptionsLabel
  value: any
}
// selection state
export interface SelectionState {
  options: Map<string, HandleOption>
  currentOption: HandleOption | null
  events: Map<string, Set<(data?: any) => void>>
}
// selection context
export interface SelectionContext {
  initOption: () => string
  addOption: (id: string, option: HandleOption) => void
  selectOption: (id: string) => void
  getCurrentOption: () => HandleOption | null
  on: (name: string, callback: (data?: any) => void) => void
  emit: (name: string, data?: any) => void
  clearSelected: () => void
}
// selection context key
export const selectionContextKey: InjectionKey<SelectionContext> =
  Symbol('selectionContext')

// use selection context
export function useSelectionContext(): SelectionContext {
  const state = reactive<SelectionState>({
    options: new Map(),
    currentOption: null,
    events: new Map(),
  })

  // init option
  function initOption(): string {
    return `${_id}${seed++}`
  }

  // push option
  function addOption(id: string, option: HandleOption) {
    state.options.set(id, option)
  }

  // select option by id
  function selectOption(id: string) {
    const option = getOptionById(id)
    if (option) {
      state.currentOption = option
    }
  }

  // clear selected option
  function clearSelected() {
    state.currentOption = null
  }

  // get current option
  function getCurrentOption() {
    return state.currentOption
  }

  // get option by id
  function getOptionById(id: string) {
    return state.options.get(id)
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
    on,
    emit,
    clearSelected,
  }
}
