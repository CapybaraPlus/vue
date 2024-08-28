<template>
  <ra-radio-group v-model="selected1" theme="button" size="small" class="mb8">
    <ra-radio label="option 1" value="1"></ra-radio>
    <ra-radio label="option 2" value="2"></ra-radio>
    <ra-radio label="option 3" value="3"></ra-radio>
  </ra-radio-group>

  <ra-radio-group v-model="selected2" theme="button" class="mb8">
    <ra-radio label="option 1" value="1"></ra-radio>
    <ra-radio label="option 2" value="2"></ra-radio>
    <ra-radio label="option 3" value="3"></ra-radio>
  </ra-radio-group>

  <ra-radio-group v-model="selected3" theme="button" size="medium" class="mb8">
    <ra-radio label="option 1" value="1"></ra-radio>
    <ra-radio label="option 2" value="2"></ra-radio>
    <ra-radio label="option 3" disabled value="3"></ra-radio>
  </ra-radio-group>

  <ra-radio-group v-model="selected4" theme="button" size="large" class="mb8">
    <ra-radio label="option 1" disabled value="1"></ra-radio>
    <ra-radio label="option 2" value="2"></ra-radio>
    <ra-radio label="option 3" value="3"></ra-radio>
  </ra-radio-group>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selected1 = ref('1')
const selected2 = ref('1')
const selected3 = ref('1')
const selected4 = ref('1')
</script>

<style scoped>
.mb8 {
  margin-bottom: 8px;
}
</style>
