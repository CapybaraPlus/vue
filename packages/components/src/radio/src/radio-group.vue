<template>
  <div
    :class="[
      ucn.b('group'),
      ucn.is(disabled, 'disabled'),
      ucn.is(column, 'column'),
    ]"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { radioGroupContextKey, ucn, useRadioGroupContext } from './context'
import { radioGroupProps, radioGroupEmit } from './radio-group'

defineOptions({
  name: 'RaRadioGroup',
})
const props = defineProps(radioGroupProps) // props
const emit = defineEmits(radioGroupEmit) // emits

const context = useRadioGroupContext(props, emit)
provide(radioGroupContextKey, context)
</script>
