<template>
  <ra-radio-group v-model="gender">
    <ra-radio
      v-for="item of data"
      :key="item.id"
      :label="item.label"
      :value="item.value"
    ></ra-radio>
  </ra-radio-group>

  <ra-radio-group v-model="search">
    <ra-radio value="https://www.baidu.com">
      <ra-link>百度</ra-link>
    </ra-radio>
    <ra-radio value="https://www.google.com">
      <ra-link>谷歌</ra-link>
    </ra-radio>
  </ra-radio-group>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const gender = ref(1)
const search = ref('https://www.baidu.com')

const data = reactive([
  {
    id: 1,
    label: '男',
    value: 1,
  },
  {
    id: 2,
    label: '女',
    value: 2,
  },
  {
    id: 3,
    label: '保密',
    value: 3,
  },
])
</script>
