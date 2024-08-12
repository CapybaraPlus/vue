<template>
  <div :class="[ucn.b()]">
    <slot name="default">{{ label }}</slot>
  </div>
</template>

<script setup lang="ts">
import { useClassName } from '@capybara-plus/hooks'
import '../styles'
import { optionProps } from './option'

// bem
const ucn = useClassName('option')
defineOptions({
  name: 'RaOption',
})
defineProps(optionProps)
</script>

<style scoped lang="scss"></style>
