<template>
  <ra-mask ref="mask" class="mask" :show="false">
    <div class="container">
      <h1>Playground</h1>
      <p>Click the button to see the mask in action</p>
      <button @click="handleClick">click me</button>
    </div>
  </ra-mask>
  <ra-button theme="primary" @click="handleClick">click me</ra-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RaMaskInstance } from '@capybara-ui/components'

// const visibility = ref(false)
const mask = ref<RaMaskInstance>(null)

const handleClick = () => {
  mask.value?.open()
}
</script>

<style>
.mask {
  display: 'flex';
  justify-content: 'center';
  align-items: 'center';
}
.container {
  width: 500px;
  height: 200px;
  padding: 20px;
  background-color: #fff;
}
</style>
