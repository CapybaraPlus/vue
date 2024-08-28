<template>
  <ra-button class="mr8" :loading="loading1" @click="handleClick1"
    >点击加载</ra-button
  >
  <ra-button class="mr8" :loading="loading2" @click="handleClick2">
    <template #loading-icon>
      <Close />
    </template>
    点击加载
  </ra-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Close } from '@capybara-plus/icons-vue'

const loading1 = ref(false)
const loading2 = ref(false)
const handleClick1 = () => {
  loading1.value = true
  setTimeout(() => {
    loading1.value = false
  }, 2000)
}
const handleClick2 = () => {
  loading2.value = true
  setTimeout(() => {
    loading2.value = false
  }, 2000)
}
</script>

<style scoped>
.mr8 {
  margin-right: 8px;
}
</style>
