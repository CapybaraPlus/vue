import {
  computed,
  CSSProperties,
  defineComponent,
  inject,
  provide,
  reactive,
  ref,
  toRefs,
  TransitionGroup,
  VNode,
  watchEffect,
} from 'vue'
import { useClassName, useTransitionGroup } from '@capybara-plus/hooks'
import {
  FormContextKey,
  FormItemContextKey,
  formItemProps,
  FormValidateError,
} from './form'
import { useResizeObserver } from '@vueuse/core'
import Schema from 'async-validator'

export default defineComponent({
  name: 'RaFormItem',
  props: formItemProps,
  setup(props, { slots }) {
    // bem
    const ucn = useClassName('form-item')

    // formContext
    const formContext = inject(FormContextKey, undefined)

    /**
     * @description label
     */
    const labelRef = ref<HTMLElement>()
    useResizeObserver(labelRef, (entries) => {
      formContext?.registerLabelWidth(entries[0].target.clientWidth)
    })
    const labelStyle = computed<CSSProperties>(() => {
      return {
        minWidth: formContext?.labelWidth + 'px', // ref in the reactive object will be wrapped
      }
    })

    /**
     * @description validate the form item
     */
    // validate state
    type ValidateState = 'pending' | 'success' | 'error'
    const validateState = ref<ValidateState>('pending')
    // change the validate state
    function changeValidateState(state: ValidateState) {
      validateState.value = state
    }
    // reset validate state to pending
    function resetValidateState() {
      changeValidateState('pending')
    }

    // success validate message
    const successValidateMessage = ref<string | VNode>('')
    // when validate success
    function onValidateSuccess() {
      changeValidateState('success')
      successValidateMessage.value = currentRule.value?.successMessage ?? ''
    }

    // error validate message
    const errorValidateMessage = ref<string | VNode>('')
    // when validate error
    function onValidateError(error: FormValidateError) {
      changeValidateState('error')

      const { errors } = error

      if (currentRule.value?.errorMessage) {
        errorValidateMessage.value = currentRule.value.errorMessage
      }

      errorValidateMessage.value = errors
        ? errors[0].message
          ? currentRule.value?.errorMessage ?? errors[0].message
          : `${props.prop} is required`
        : ''
    }

    const currentRule = computed(() => formContext?.rules?.[props.prop])
    // validate funciton
    function validate() {
      if (!props.prop || !currentRule.value) return

      const value = formContext?.model[props.prop]

      // create validator
      const validator = new Schema({
        [props.prop]: currentRule.value,
      })

      // validate
      return validator
        .validate({ [props.prop]: value })
        .then(() => {
          onValidateSuccess()
        })
        .catch((error: FormValidateError) => {
          onValidateError(error)
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
        resetValidateState,
      })
    )

    return () => {
      return (
        <div class={[ucn.b(), ucn.is(currentRule.value?.required, 'required')]}>
          <label
            ref={labelRef}
            class={[ucn.e('label')]}
            style={labelStyle.value}
          >
            {slots.label ? slots.label() : props.label}
          </label>

          <div class={[ucn.e('wrapper')]}>
            {slots.default?.()}
            <div class={[ucn.e('validation-message')]}>
              <TransitionGroup name={useTransitionGroup('slide-bottom')}>
                {validateState.value === 'error' ? (
                  <span class={[ucn.m('error')]} key="error">
                    {errorValidateMessage.value}
                  </span>
                ) : null}
                {validateState.value === 'success' ? (
                  <span class={[ucn.m('success')]} key="success">
                    {successValidateMessage.value}
                  </span>
                ) : null}
              </TransitionGroup>
            </div>
          </div>
        </div>
      )
    }
  },
})
