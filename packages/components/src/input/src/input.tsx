import { defineComponent, nextTick, onMounted, ref } from 'vue'
import { inputEmits, inputProps } from './input'
import '../styles'
import { useClassName } from '@capybara-plus/hooks'

export default defineComponent({
  name: 'RaInput',
  props: inputProps,
  emits: inputEmits,
  setup(props, { emit, slots }) {
    // bem
    const ucn = useClassName('input')

    const inputRef = ref<HTMLInputElement>()

    // the key of the controlled component
    // if input value != modelValue, set input value
    const setInputValue = () => {
      const input = inputRef.value
      if (input && input.value != props.modelValue)
        input.value = props.modelValue?.toString() || ''
    }

    // input event
    const handleInput = (e: Event) => {
      emit('input', e)
      // if input value == modelValue, return
      if ((e.target as HTMLInputElement).value == props.modelValue) return
      emit('update:modelValue', (e.target as HTMLInputElement).value)
      nextTick(() => {
        setInputValue()
      })
    }

    // avoid modelValue has the initial value, but input value is empty
    onMounted(() => {
      setInputValue()
    })

    return () => {
      return (
        <div class={[ucn.b(), ucn.is(props.disabled ? 'disabled' : '')]}>
          <div class={[ucn.e('wrapper')]}>
            <div class={[ucn.e('prefix')]}>
              {slots.prefix ? slots.prefix() : null}
            </div>
            <input
              ref={inputRef}
              class={[ucn.e('inner')]}
              type="text"
              onInput={handleInput}
              placeholder={props.placeholder}
              disabled={props.disabled}
            />
            <div class={[ucn.e('suffix')]}>
              {slots.suffix ? slots.suffix() : null}
            </div>
          </div>
        </div>
      )
    }
  },
})
