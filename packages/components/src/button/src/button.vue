<template>
  <button
    :class="[
      ucn.b(),
      ucn.m(_theme),
      ucn.m(_size),
      ucn.is(_disabled),
      ucn.m(_shape),
      ucn.is(_block),
      ucn.is(_color.cls),
      _hoverAnimation,
      _activeAnimation,
    ]"
    :disabled="disabled"
    :type="type"
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
const _theme = computed(() =>
  props.theme == 'default' || props.color ? '' : props.theme
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
// color
const _color = computed(() => {
  const cls = props.color ? 'color' : ''
  const style = `--color: ${props.color}`
  return {
    cls,
    style,
  }
})
// hoverAnimation
const _hoverAnimation = computed(() =>
  props.hoverAnimation ? `hover-${props.hoverAnimation}` : undefined
)
// activeAnimation
const _activeAnimation = computed(() =>
  props.activeAnimation ? `active-${props.activeAnimation}` : ''
)
</script>

<style scoped></style>
