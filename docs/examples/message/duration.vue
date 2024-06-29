<template>
  <ra-button @click="handleClick1">after 3s close</ra-button>
  <ra-button @click="handleClick2">never close</ra-button>
</template>

<script setup lang="ts">
import { RaMessage } from '@capybara-plus/components'

const handleClick1 = () => {
  RaMessage({
    content: 'i will close after 3s',
    duration: 3000,
  })
}

const handleClick2 = () => {
  RaMessage({
    content: 'i will not close',
    duration: 0,
  })
}
</script>
