<template>
  <div
    :tabindex="tabindex"
    :class="[
      ucn.b(),
      ucn.is(active, 'active'),
      ucn.is(disabled, 'disabled'),
      ucn.is(focused, 'focused'),
    ]"
    @click.stop="handleClick"
  >
    <slot name="default">{{ label }}</slot>
  </div>
</template>

<script setup lang="ts">
import { useClassName } from '@capybara-plus/hooks'
import '../styles'
import { optionProps } from './option'
import { computed, inject, onBeforeUnmount } from 'vue'
import { selectionContextKey } from './context'

// bem
const ucn = useClassName('option')
defineOptions({
  name: 'RaOption',
})
const props = defineProps(optionProps) // props

// selection context
const selectionContext = inject(selectionContextKey)
const optionId = selectionContext?.initOption()

// add option to selection context
selectionContext?.addOption({
  id: optionId!,
  props,
})

// before unmount remove the option of selection context
onBeforeUnmount(() => {
  selectionContext?.removeOption(optionId!)
})

// handle click
const handleClick = () => {
  if (props.disabled) return
  selectionContext?.emit('select', props.value)
  selectionContext?.selectOption(optionId!)
}

const active = computed(() => selectionContext?.isSelected(optionId!))
const focused = computed(() => selectionContext?.isFocused(optionId!))
</script>

<style scoped lang="scss"></style>
