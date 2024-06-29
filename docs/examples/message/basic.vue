<template>
  <ra-button @click="handleClick">click</ra-button>
</template>

<script setup lang="ts">
import { RaMessage } from '@capybara-plus/components'

const handleClick = () => {
  RaMessage({
    content: 'this is a message',
  })
}
</script>
