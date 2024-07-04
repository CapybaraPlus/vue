<template>
  <div>values: {{ inputValue }}</div>
  <ra-input
    v-model="inputValue"
    placeholder="Please input"
    clearable
    theme="mask"
  >
    <template #prefix>
      <ra-icon><Success></Success></ra-icon>
    </template>
    <template #suffix>
      <ra-icon><Success></Success></ra-icon>
    </template>
  </ra-input>
  <ra-input placeholder="Please input" size="small"></ra-input>
  <ra-input placeholder="Please input" disabled></ra-input>
  <ra-input placeholder="Please input" size="large"></ra-input>
</template>

<script setup lang="ts">
import { Success } from '@capybara-plus/icons-vue'
import { ref } from 'vue'
import { RaInput } from '@capybara-plus/components'

const inputValue = ref('123')
</script>

<style>
.ra-input {
  margin: 10px;
}
</style>
