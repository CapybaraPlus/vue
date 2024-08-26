<template>
  <i
    :class="[ucn.b()]"
    :style="style"
    @click="(e: MouseEvent) => $emit('click',e)"
  >
    <slot />
  </i>
</template>

<script setup lang="ts">
import { useClassName } from '@capybara-plus/hooks'
import '../styles'
import { computed } from 'vue'
import { iconEmit, iconProps } from './icon'

const ucn = useClassName('icon')
defineOptions({
  name: 'RaIcon',
})

const props = defineProps(iconProps)
defineEmits(iconEmit)

const style = computed(() => {
  return {
    color: props.color,
    fontSize: props.size,
  }
})
</script>
