<template>
  <div :class="[ucn.b(), ucn.is(active, 'active')]" @click="handleClick">
    <slot name="default">{{ label }}</slot>
  </div>
</template>

<script setup lang="ts">
import { useClassName } from '@capybara-plus/hooks'
import '../styles'
import { optionProps } from './option'
import { computed, inject, useSlots, watchEffect } from 'vue'
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
const optionId = selectionContext?.initOption()
watchEffect(() => {
  selectionContext?.addOption({
    id: optionId!,
    label: slots.default ?? props.label,
    value: props.value,
  })
})

// handle click
const handleClick = () => {
  selectionContext?.selectOption(optionId!)
  selectionContext?.emit('change', props.value)
}

const active = computed(
  () => selectionContext?.getCurrentOption()?.id === optionId
)
</script>

<style scoped lang="scss"></style>
