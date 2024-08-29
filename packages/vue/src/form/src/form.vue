<template>
  <form :class="[ucn.b()]">
    <slot></slot>
  </form>
</template>

<script setup lang="ts">
import { provide, reactive, toRefs } from 'vue'
import { useClassName } from '@capybara-plus/hooks'
import { FormContext, useFormItemContext, useLabelWidth } from './context'
import { FormContextKey, formProps } from './form'

defineOptions({
  name: 'RaForm',
})

const props = defineProps(formProps)

// bem
const ucn = useClassName('form')

// form context
const context: FormContext = reactive({
  ...toRefs(props),
  ...useLabelWidth(),
  ...useFormItemContext(),
})

provide(FormContextKey, context)

defineExpose({
  reset: context.resetValidateState,
  validate: context.validate,
})
</script>

<style scoped lang="scss"></style>
