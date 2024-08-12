<template>
  <div :class="[ucn.b()]"></div>
</template>

<script setup lang="ts">
import { useClassName } from '@capybara-plus/hooks'

const ucn = useClassName('radio')
defineOptions({
  name: 'RaRadio',
})
</script>

<style scoped lang="scss"></style>
