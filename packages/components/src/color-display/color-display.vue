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
import { useClassName } from '@capybara-ui/hooks'
import './styles/index'
import { ColorDisplayProps, defaultNamesMap } from './color-display'

const ucn = useClassName('color-display')
defineOptions({
  name: 'RaColorDisplay',
})

defineProps(ColorDisplayProps)
</script>

<style scoped lang="scss"></style>
