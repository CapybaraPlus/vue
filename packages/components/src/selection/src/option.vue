<template>
  <div :class="[ucn.b()]" @click="handleClick">
    <slot name="default">{{ label }}</slot>
  </div>
</template>

<script setup lang="ts">
import { useClassName } from '@capybara-plus/hooks'
import '../styles'
import { optionProps } from './option'
import { inject, useSlots, watchEffect } from 'vue'
import { selectionContextKey } from './context'

// bem
const ucn = useClassName('option')
defineOptions({
  name: 'RaOption',
})
const props = defineProps(optionProps) // props
const slots = useSlots() // slots

// selection context
const selectionContext = inject(selectionContextKey)
const id = selectionContext?.initOption()
watchEffect(() => {
  selectionContext?.addOption(id!, {
    label: slots.default ?? props.label,
    value: props.value,
  })
})

// handle click
const handleClick = () => {
  selectionContext?.selectOption(id!)
  selectionContext?.emit('change', props.value)
}
</script>

<style scoped lang="scss"></style>
