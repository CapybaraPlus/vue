<template>
  <div :class="[ucn.b()]">
    <div
      v-for="(defaultName, index) of defaultNamesMap"
      :key="index"
      :class="[ucn.e('item'), ucn.m(defaultName)]"
    >
      <span>{{ defaultName }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useClassName } from '@capybara-plus/hooks'
import { colorDisplayProps, defaultNamesMap } from './color-display'
import '@capybara-plus/theme-chalk/src/components/color-display.scss'

const ucn = useClassName('color-display')
defineOptions({
  name: 'RaColorDisplay',
})

defineProps(colorDisplayProps)
</script>

<style scoped lang="scss"></style>
