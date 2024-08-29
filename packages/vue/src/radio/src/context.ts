import { useClassName } from '@capybara-plus/hooks'
import {
  computed,
  type ComputedRef,
  inject,
  type InjectionKey,
  nextTick,
  type SetupContext,
  type WritableComputedRef,
} from 'vue'
import { RadioGroupEmit, RadioGroupProps } from './radio-group'
import { RadioProps } from './radio'

export const ucn = useClassName('radio')

/**
 * radio group context
 */
export interface RadioGroupContext {
  props: RadioGroupProps
  changeEvent: (val: string | number | boolean | undefined) => void
}
export const radioGroupContextKey: InjectionKey<RadioGroupContext> = Symbol(
  'radioGroupContextKey'
)
export const useRadioGroupContext = (
  props: RadioGroupProps,
  emit: SetupContext<RadioGroupEmit>['emit']
): RadioGroupContext => {
  const changeEvent = (val: string | number | boolean | undefined) => {
    emit('update:modelValue', val)
    nextTick(() => {
      emit('change', val)
    })
  }
  return {
    props,
    changeEvent,
  }
}

/**
 * radio context
 */
export interface RadioContext {
  name: ComputedRef<string | undefined>
  modelValue: WritableComputedRef<string | number | boolean | undefined>
  checked: ComputedRef<boolean>
  disabled: ComputedRef<boolean>
  theme: ComputedRef<string | undefined>
  size: ComputedRef<string | undefined>
}
export const useRadioContext = (props: RadioProps): RadioContext => {
  const radioGroupContext = inject(radioGroupContextKey, undefined)

  const checked = computed(() => modelValue.value === props.value)

  const modelValue = computed({
    get() {
      return radioGroupContext?.props.modelValue
    },
    set(val) {
      radioGroupContext?.changeEvent(val)
    },
  })

  const name = computed(() => radioGroupContext?.props.name ?? props.name)

  const disabled = computed(
    () => radioGroupContext?.props.disabled || props.disabled
  )

  const theme = computed(() => radioGroupContext?.props.theme)

  const size = computed(() => radioGroupContext?.props.size ?? props.size)

  return {
    name,
    modelValue,
    checked,
    disabled,
    theme,
    size,
  }
}
