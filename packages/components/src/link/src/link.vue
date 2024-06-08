<template>
  <a
    :class="[ucn.b(), ucn.m(_theme), ucn.is(_disabled)]"
    :href="disabled ? undefined : href"
    :target="_disabled ? undefined : target"
    @click="$emit('click', $event)"
  >
    <span :class="ucn.e('inner')">
      <slot></slot>
    </span>
  </a>
</template>

<script setup lang="ts">
import { useClassName } from '@capybara-ui/hooks'
import { linkProps, linkEmits } from './link'
import { computed } from 'vue'
import '../styles'

const ucn = useClassName('link')
defineOptions({
  name: 'RaLink',
})

const $props = defineProps(linkProps)
defineEmits(linkEmits)

const _theme = computed(() => ($props.theme == 'defualt' ? '' : $props.theme))
const _disabled = computed(() => ($props.disabled ? 'disabled' : ''))
</script>

<style scoped lang="scss"></style>
