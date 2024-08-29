<template>
  <span
    ref="rippleRef"
    :class="ucn.b()"
    :style="style"
    @animationend="handleAnimationed"
    @animationstart="handleAnimationStart"
  ></span>
</template>

<script setup lang="ts">
import { useClassName } from '@capybara-plus/hooks'
import { computed, CSSProperties } from 'vue'
import { rippleProps } from './ripple'

// bem
const ucn = useClassName('ripple')

defineOptions({
  name: 'RaRipple',
})

defineExpose({
  close: () => {
    props.unmount()
  },
})

const props = defineProps(rippleProps)

const style = computed<CSSProperties>(() => {
  const { width, height, left, top } = props.parent.getBoundingClientRect()
  const diameter = Math.max(width, height)
  const event = props.event
  const x = event.clientX - left - diameter / 2
  const y = event.clientY - top - diameter / 2
  return {
    width: `${diameter}px`,
    height: `${diameter}px`,
    left: `${x}px`,
    top: `${y}px`,
    backgroundColor: props.color,
    zIndex: props.zIndex,
    animationDuration: `${props.duration}ms`,
  }
})

const handleAnimationStart = () => {
  props.afterAnimationStart?.()
}

const handleAnimationed = () => {
  props.beforeAnimationEnd?.()
  props.unmount()
}
</script>

<style scoped lang="scss"></style>
