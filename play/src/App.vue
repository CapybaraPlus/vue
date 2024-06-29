<template>
  <ra-button
    v-for="(theme, index) in themes"
    :key="index"
    :theme="theme"
    @click="() => handleClick(theme)"
    >点击</ra-button
  >
</template>

<script setup lang="ts">
import {
  MessageTheme,
  RaMessage,
  messageTheme,
} from '@capybara-plus/components'

import { ref } from 'vue'
const themes = ref<typeof messageTheme>([
  'default',
  'success',
  'warning',
  'error',
] as const)
const handleClick = (theme: string) => {
  // RaMessage.warning({
  //   content: 'hello wolrd',
  //   duration: 3000,
  // })
  RaMessage({
    content: '2222',
    duration: 0,
    theme: theme as MessageTheme,
  })
}
</script>

<style></style>
