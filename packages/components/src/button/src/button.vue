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
import { useClassName, useComponetName } from '@capybara-ui/hooks'
import { buttonProps, buttonEmits } from './button'
import '../styles/index'

const ucn = useClassName('button')
defineOptions({
  name: useComponetName('button'),
})

const $props = defineProps(buttonProps)
const $emit = defineEmits(buttonEmits)

const handleClick = (e: MouseEvent) => {
  $emit('click', e)
}

const _theme = computed(() =>
  $props.theme == 'default' || $props.color ? '' : $props.theme
)

const _size = computed(() => ($props.size == 'normal' ? '' : $props.size))

const _disabled = computed(() => ($props.disabled ? 'disabled' : undefined))

const _shape = computed(() =>
  $props.shape == 'default' ? undefined : $props.shape
)

const _block = computed(() => ($props.block ? 'block' : undefined))

const _color = computed(() => {
  const cls = $props.color ? 'color' : ''
  const style = `--color: ${$props.color}`
  return {
    cls,
    style,
  }
})

const _hoverAnimation = computed(() =>
  $props.hoverAnimation ? `hover-${$props.hoverAnimation}` : undefined
)

const _activeAnimation = computed(() =>
  $props.activeAnimation ? `active-${$props.activeAnimation}` : ''
)
</script>

<style scoped></style>
