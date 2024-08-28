<template>
  <div class="mb8 flex">
    单独禁用：
    <ra-radio-group v-model="selected1">
      <ra-radio label="option 1" :disabled="disabled1" value="1"></ra-radio>
      <ra-radio label="option 2" value="2"></ra-radio>
      <ra-radio label="option 3" value="3"></ra-radio>
    </ra-radio-group>
    <ra-button size="small" @click="disabled1 = !disabled1"
      >更改禁用状态</ra-button
    >
  </div>

  <div class="mb8 flex">
    整个禁用：
    <ra-radio-group v-model="selected2" :disabled="disabled2">
      <ra-radio label="option 1" value="1"></ra-radio>
      <ra-radio label="option 2" value="2"></ra-radio>
      <ra-radio label="option 3" value="3"></ra-radio>
    </ra-radio-group>
    <ra-button size="small" @click="disabled2 = !disabled2"
      >更改禁用状态</ra-button
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selected1 = ref('1')
const selected2 = ref('2')

const disabled1 = ref(true)
const disabled2 = ref(true)
</script>

<style scoped>
.mb8 {
  margin-bottom: 8px;
}

.flex {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
