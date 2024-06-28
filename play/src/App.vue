<template>
  <ra-button theme="primary" @click="handleClick">点击</ra-button>
</template>

<script setup lang="ts">
import { RaMessage } from '@capybara-plus/components'

const handleClick = () => {
  RaMessage({
    content: 'hello wolrd',
    duration: 3000,
    appendTo: '',
  })
  RaMessage({
    content: '2222',
    duration: 1000,
  })
}
</script>

<style></style>
