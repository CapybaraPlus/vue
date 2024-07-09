<template>
  <div :class="[ucn.b(), ucn.is(currentRule?.required, 'required')]">
    <label ref="labelRef" :class="[ucn.e('label')]" :style="labelStyle">
      <template v-if="props.label || $slots.label">
        <slot name="label">
          {{ props.label }}
        </slot>
      </template>
    </label>

    <div :class="[ucn.e('wrapper')]">
      <slot></slot>
      <div :class="[ucn.e('validation-message')]">
        <TransitionGroup :name="useTransitionGroup('slide-bottom')">
          <template v-if="validateState === 'error'">
            <span key="error" :class="[ucn.m('error')]">
              <ra-icon>
                <Error />
              </ra-icon>
              {{ errorValidateMessage }}
            </span>
          </template>
          <template v-else-if="validateState === 'success'">
            <span key="success" :class="[ucn.m('success')]">
              <ra-icon>
                <Success />
              </ra-icon>
              {{ successValidateMessage }}
            </span>
          </template>
        </TransitionGroup>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  CSSProperties,
  inject,
  onMounted,
  provide,
  reactive,
  ref,
  toRefs,
  VNode,
} from 'vue'
import { useClassName, useTransitionGroup } from '@capybara-plus/hooks'
import {
  FormContextKey,
  FormItemContextKey,
  FormItemId,
  formItemProps,
  FormValidateError,
} from './form'
import { useResizeObserver } from '@vueuse/core'
import Schema from 'async-validator'
import { FormItemContext } from './context'
import RaIcon from '../../icon'
import { Success, Error } from '@capybara-plus/icons-vue'
defineOptions({
  name: 'RaFormItem',
})

const props = defineProps(formItemProps)

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
  return new Promise<void>((resolve, reject) => {
    validator
      .validate({ [props.prop]: value })
      .then(() => {
        onValidateSuccess()
        resolve()
      })
      .catch((error: FormValidateError) => {
        onValidateError(error)
        reject()
      })
  })
}

const context: FormItemContext = reactive({
  ...toRefs(props),
  validate,
  resetValidateState,
  _id: FormItemId(),
})

provide(FormItemContextKey, reactive(context))

onMounted(() => {
  formContext?.registerFormItemContext(context)
})
</script>

<style scoped lang="scss"></style>
