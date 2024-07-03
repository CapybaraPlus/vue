<template>
  <div>values: {{ inputValue }}</div>
  <ra-input
    v-model="inputValue"
    placeholder="Please input"
    type="password"
    readonly
    disabled
  >
    <template #prefix>
      <ra-icon><Success></Success></ra-icon>
    </template>
    <template #suffix>
      <ra-icon><Success></Success></ra-icon>
    </template>
  </ra-input>
</template>

<script setup lang="ts">
import { Success } from '@capybara-plus/icons-vue'
import { ref } from 'vue'
import { RaInput } from '@capybara-plus/components'

const inputValue = ref('123')
</script>

<style></style>
