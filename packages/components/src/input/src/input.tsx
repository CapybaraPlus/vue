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
import { useFormContext } from '../../form'

export default defineComponent({
  name: 'RaInput',
  components: {
    RaIcon,
    Close,
  },
  props: inputProps,
  emits: inputEmits,
  setup(props, { emit, slots, expose }) {
    // bem
    const ucn = useClassName('input')

    // form context
    const { formItemContext } = useFormContext()

    // HTML input element
    const inputRef = ref<HTMLInputElement>()

    // the key of the controlled component
    // if input value != modelValue, set input value
    // for example, if user do not set v-model, forbid to set input value(set input value = '')
    const setInputValue = () => {
      const input = inputRef.value

      if (input && input.value != props.modelValue)
        input.value = props.modelValue?.toString() || ''
    }

    // avoid modelValue has the initial value, but input value is empty
    onMounted(() => {
      setInputValue()
    })

    // emit(update:modelValue) and set input value
    const emitInputValue = (val: string) => {
      emit('update:modelValue', val)
      nextTick(() => {
        setInputValue()
      })
    }

    // input event
    const handleInput = (e: Event) => {
      emit('input', (e.target as HTMLInputElement).value)

      if ((e.target as HTMLInputElement).value == props.modelValue) return
      emitInputValue((e.target as HTMLInputElement).value)
    }

    // focus event
    const handleFoucs = (e: FocusEvent) => {
      emit('focus', e)
    }

    // blur event
    const handleBlur = (e: FocusEvent) => {
      emit('blur', e)
      formItemContext?.validate()
    }

    // change event
    const handleChange = (e: Event) => {
      emit('change', (e.target as HTMLInputElement).value)
    }

    // keydown event
    const handleKeydown = (e: KeyboardEvent) => {
      emit('keydown', e)
    }

    // clear input value
    const clear = () => {
      emitInputValue('')
    }
    const clearStyle = computed<CSSProperties>(() => {
      if (!props.modelValue || props.modelValue.toString().length == 0)
        return { opacity: 0 }
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

    // input word count
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

    // HTML input element focus
    const focus = () => {
      inputRef.value?.focus()
    }

    // HTML input element blur
    const blur = () => {
      inputRef.value?.blur()
    }

    // HTML input element select
    const select = () => {
      inputRef.value?.select()
    }

    expose({
      input: inputRef,
      clear,
      focus,
      blur,
      select,
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
              placeholder={props.placeholder}
              disabled={props.disabled}
              readonly={props.readonly}
              autocomplete={props.autoComplete}
              type={inputType.value}
              maxlength={props.maxlength}
              minlength={props.minlength}
              onInput={handleInput}
              onFocus={handleFoucs}
              onBlur={handleBlur}
              onChange={handleChange}
              onKeydown={handleKeydown}
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
