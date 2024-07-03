import {
  CSSProperties,
  computed,
  defineComponent,
  nextTick,
  onMounted,
  ref,
} from 'vue'
import { inputEmits, inputProps } from './input'
import '../styles'
import { useClassName } from '@capybara-plus/hooks'
import { RaIcon } from '../../icon'
import { Close } from '@capybara-plus/icons-vue'

export default defineComponent({
  name: 'RaInput',
  components: {
    RaIcon,
    Close,
  },
  props: inputProps,
  emits: inputEmits,
  setup(props, { emit, slots }) {
    // bem
    const ucn = useClassName('input')

    const inputRef = ref<HTMLInputElement>()

    // the key of the controlled component
    // if input value != modelValue, set input value
    // for example, if user do not set v-model, forbid to set input value(set input value = '')
    const setInputValue = () => {
      const input = inputRef.value

      if (input && input.value != props.modelValue)
        input.value = props.modelValue?.toString() || ''
    }

    // emit(update:modelValue) and set input value
    const emitInputValue = (val: string) => {
      emit('update:modelValue', val)
      nextTick(() => {
        setInputValue()
      })
    }

    // clear input value
    const clear = () => {
      emitInputValue('')
    }
    const clearStyle = computed<CSSProperties>(() => {
      if (!props.modelValue || props.modelValue.toString().length == 0)
        return { display: 'none' }
      return {}
    })

    // input event
    const handleInput = (e: Event) => {
      emit('input', e)

      if ((e.target as HTMLInputElement).value == props.modelValue) return
      emitInputValue((e.target as HTMLInputElement).value)
    }

    // avoid modelValue has the initial value, but input value is empty
    onMounted(() => {
      setInputValue()
    })

    return () => {
      return (
        <div class={[ucn.b(), ucn.is(props.disabled, 'disabled')]}>
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
              readonly={props.readonly}
            />
            <div class={[ucn.e('suffix')]}>
              {slots.suffix ? slots.suffix() : null}
              {props.clearable ? (
                <ra-icon
                  class={[ucn.e('clear')]}
                  style={clearStyle.value}
                  size=".7em"
                  onClick={clear}
                >
                  <Close />
                </ra-icon>
              ) : null}
            </div>
          </div>
        </div>
      )
    }
  },
})
