<template>
  <button
    ref="buttonRef"
    :class="[
      ucn.b(),
      ucn.m(_type),
      ucn.m(_size),
      ucn.m(_shape),
      ucn.m(_theme),
      ucn.is(_disabled),
      ucn.is(block, 'block'),
      ucn.is(_color.cls),
    ]"
    :disabled="disabled"
    :type="nativeType"
    :style="[_color.style]"
    @click="handleClick"
    @mousedown="handleMouseDown"
  >
    <slot></slot>
    <span
      ref="rippleRef"
      :class="[ucn.e('ripple'), ucn.is(rippleActive, 'active')]"
      :style="rippleStyle"
    ></span>
  </button>
</template>

<script setup lang="ts">
import { computed, CSSProperties, nextTick, ref } from 'vue'
import { buttonProps, buttonEmits } from './button'
import '../styles/index'
import { useClassName } from '@capybara-plus/hooks'

// bem
const ucn = useClassName('button')

defineOptions({
  name: 'RaButton',
})
const props = defineProps(buttonProps) // props
const emit = defineEmits(buttonEmits) // emits

/**
 * @description handle ripple animation
 */
const buttonRef = ref<HTMLButtonElement | null>(null)
const rippleStyle = ref<CSSProperties>({})
const rippleActive = ref(false)
const handleRipple = (e: MouseEvent) => {
  // cancel previous animation
  cancelRipple()
  function cancelRipple() {
    rippleActive.value = false
    window.removeEventListener('mouseup', cancelRipple)
  }
  window?.addEventListener('mouseup', cancelRipple)
  nextTick(() => {
    const { width, height, left, top } =
      buttonRef.value!.getBoundingClientRect()
    const diameter = Math.max(width, height)
    const x = e.clientX - left - diameter / 2
    const y = e.clientY - top - diameter / 2
    rippleStyle.value = {
      width: `${diameter}px`,
      height: `${diameter}px`,
      left: `${x}px`,
      top: `${y}px`,
    }
    rippleActive.value = true
  })
}
const handleMouseDown = (e: MouseEvent) => {
  handleRipple(e)
  emit('mousedown', e)
}

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
// theme
const _theme = computed(() =>
  props.theme == 'default' || !props.theme ? '' : props.theme
)
</script>

<style scoped></style>
