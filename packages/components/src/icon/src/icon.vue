<template>
  <i :class="[ucn.b()]" :style="style">
    <slot />
  </i>
</template>

<script setup lang="ts">
import { useClassName } from '@capybara-plus/hooks'
import '../styles'
import { computed } from 'vue'
import { iconProps } from './icon'

const ucn = useClassName('icon')
defineOptions({
  name: 'RaIcon',
})

const $props = defineProps(iconProps)

const style = computed(() => {
  return {
    color: $props.color,
    fontSize: $props.size,
  }
})
</script>
