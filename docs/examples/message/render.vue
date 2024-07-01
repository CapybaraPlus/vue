<template>
  <ra-button @click="handleClick">click</ra-button>
</template>

<script setup lang="ts">
import { RaMessage } from '@capybara-plus/components'
import { h } from 'vue'

const handleClick = () => {
  RaMessage({
    content: h(
      'div',
      {
        style: {
          color: 'red',
        },
      },
      'this is a message'
    ),
    zIndex: 3000,
  })
}
</script>
