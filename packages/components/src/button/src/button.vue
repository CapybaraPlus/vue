<template>
  <button
    :class="[
      ucn.b(),
      ucn.m(_type),
      ucn.m(_size),
      ucn.is(_disabled),
      ucn.m(_shape),
      ucn.is(_block),
      ucn.is(_color.cls),
    ]"
    :disabled="disabled"
    :type="nativeType"
    :style="[_color.style]"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useClassName } from '@capybara-plus/hooks'
import { buttonProps, buttonEmits } from './button'
import '../styles/index'

// bem
const ucn = useClassName('button')

defineOptions({
  name: 'RaButton',
})
const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)

// click event
const handleClick = (e: MouseEvent) => {
  emit('click', e)
}

/**
 * computed props
 */
// theme
const _type = computed(() =>
  props.type == 'default' || !props.type ? '' : props.type
)
// size
const _size = computed(() => (props.size == 'normal' ? '' : props.size))
// disabled
const _disabled = computed(() => (props.disabled ? 'disabled' : undefined))
// shape
const _shape = computed(() =>
  props.shape == 'default' ? undefined : props.shape
)
// block
const _block = computed(() => (props.block ? 'block' : undefined))
// custom color
const _color = computed(() => {
  let style = ''
  let cls = ''
  if (props.color) {
    cls = 'color'
    style = `--color: ${props.color}`
  }
  return {
    cls,
    style,
  }
})
</script>

<style scoped></style>
