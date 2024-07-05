import {
  computed,
  CSSProperties,
  defineComponent,
  inject,
  provide,
  reactive,
  ref,
  toRefs,
  watchEffect,
} from 'vue'
import { useClassName } from '@capybara-plus/hooks'
import { FormContextKey, FormItemContextKey, formItemProps } from './form'
import { useResizeObserver } from '@vueuse/core'
import Schema from 'async-validator'
import RaIcon from '../../icon'
import { Error, Success } from '@capybara-plus/icons-vue'

export default defineComponent({
  name: 'RaFormItem',
  props: formItemProps,
  setup(props, { slots }) {
    // bem
    const ucn = useClassName('form-item')

    // formContext
    const formContext = inject(FormContextKey, undefined)

    // label
    const labelRef = ref<HTMLElement>()
    useResizeObserver(labelRef, (entries) => {
      formContext?.registerLabelWidth(entries[0].target.clientWidth)
    })
    const labelStyle = computed<CSSProperties>(() => {
      return {
        minWidth: formContext?.labelWidth + 'px', // ref in the reactive object will be wrapped
      }
    })

    const error = ref(false)
    const createValidationMessage = computed(() => {
      return <RaIcon>{error.value ? <Error /> : <Success />}</RaIcon>
    })

    // function validate
    const validate = () => {
      if (!props.prop) return

      const value = formContext?.model[props.prop]
      const rule = formContext?.rules?.[props.prop]
      if (!rule) return

      // create validator
      const validator = new Schema({
        [props.prop]: rule,
      })

      // validate
      return validator
        .validate({ [props.prop]: value })
        .then(() => {
          error.value = false
        })
        .catch(() => {
          error.value = true
        })
    }

    watchEffect(() => {
      validate()
    })

    provide(
      FormItemContextKey,
      reactive({
        ...toRefs(props),
        validate,
      })
    )

    return () => {
      return (
        <div class={[ucn.b()]}>
          <label
            ref={labelRef}
            class={[ucn.e('label')]}
            style={labelStyle.value}
          >
            {slots.label ? slots.label() : props.label}
          </label>

          <div class={[ucn.e('wrapper')]}>
            {slots.default?.()}
            <span class={[ucn.e('validation')]}>
              {createValidationMessage.value}
            </span>
          </div>
        </div>
      )
    }
  },
})
