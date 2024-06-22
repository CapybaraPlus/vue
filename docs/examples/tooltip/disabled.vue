<template>
  <ra-tooltip :disabled="disabled" content="this is a button">
    <ra-button>button</ra-button>
  </ra-tooltip>
  <ra-button @click="handleClick">change the disabled of tooltip</ra-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const disabled = ref(false)
const handleClick = () => {
  disabled.value = !disabled.value
}
</script>
