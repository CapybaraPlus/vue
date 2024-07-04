import {
  CSSProperties,
  computed,
  defineComponent,
  h,
  nextTick,
  onMounted,
  ref,
} from 'vue'
import { inputEmits, inputProps } from './input'
import '../styles'
import { useClassName } from '@capybara-plus/hooks'
import { RaIcon } from '../../icon'
import { Close, Display, Hide } from '@capybara-plus/icons-vue'

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

    // clear input value
    const clear = () => {
      emitInputValue('')
    }
    const clearStyle = computed<CSSProperties>(() => {
      if (!props.modelValue || props.modelValue.toString().length == 0)
        return { display: 'none' }
      return {}
    })

    // control visibility when the type is password
    const showPassword = ref(false)
    const inputType = computed(() => {
      if (props.type == 'password') {
        return showPassword.value ? 'text' : 'password'
      }
      return props.type
    })
    const changePasswordVisibility = () => {
      showPassword.value = !showPassword.value
    }

    const count = computed(() => {
      if (!props.showCount) return null
      if (props.modelValue === '' || props.modelValue) {
        return (
          <span class={[ucn.e('count')]}>
            {props.modelValue.toString().length}/{props.maxlength}
          </span>
        )
      }
      return null
    })

    return () => {
      return (
        <div
          class={[
            ucn.b(),
            ucn.m(props.size),
            ucn.is(props.disabled, 'disabled'),
            ucn.is(props.readonly, 'readonly'),
            ucn.is(props.theme, 'theme'),
          ]}
        >
          <div class={[ucn.e('wrapper')]}>
            <div class={[ucn.e('prefix')]}>
              {slots.prefix ? slots.prefix() : null}
            </div>
            <input
              ref={inputRef}
              class={[ucn.e('inner')]}
              onInput={handleInput}
              placeholder={props.placeholder}
              disabled={props.disabled}
              readonly={props.readonly}
              autocomplete={props.autoComplete}
              type={inputType.value}
              maxlength={props.maxlength}
              minlength={props.minlength}
            />
            <div class={[ucn.e('suffix')]}>
              {count.value}
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
              {props.type == 'password' ? (
                <ra-icon
                  class={[ucn.e('password')]}
                  onClick={changePasswordVisibility}
                >
                  {inputType.value == 'password' ? h(Hide) : h(Display)}
                </ra-icon>
              ) : null}
              {slots.suffix ? slots.suffix() : null}
            </div>
          </div>
        </div>
      )
    }
  },
})
