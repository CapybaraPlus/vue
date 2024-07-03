<template>
  <div>values: {{ inputValue }}</div>
  <ra-input v-model="inputValue" placeholder="Please input" disabled>
    <template #prefix>
      <ra-icon><Success></Success></ra-icon>
    </template>
    <template #suffix>
      <ra-icon><Success></Success></ra-icon>
    </template>
  </ra-input>
  <ra-button disabled>click me</ra-button>
</template>

<script setup lang="ts">
import { Success } from '@capybara-plus/icons-vue'
import { ref } from 'vue'

const inputValue = ref('123')
</script>

<style></style>
