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
import testVue from './test.vue'
import { getCurrentInstance, h, ref } from 'vue'

const themes = ref<typeof messageTheme>([
  'default',
  'success',
  'warning',
  'error',
] as const)
const instance = getCurrentInstance()

const handleClick = (theme: string) => {
  // RaMessage.warning({
  //   content: 'hello wolrd',
  //   duration: 3000,
  // })
  RaMessage({
    content: h(testVue),
    duration: 0,
    theme: theme as MessageTheme,
    zIndex: 3000,
    appContext: instance?.appContext,
  })
}
</script>

<style></style>
