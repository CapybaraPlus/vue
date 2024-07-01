<template>
  <ra-button @click="handleClick">click</ra-button>
</template>

<script setup lang="ts">
import { RaMessage } from '@capybara-plus/components'
import { Success } from '@capybara-plus/icons-vue'

const handleClick = () => {
  RaMessage({
    content: 'custom icon',
    icon: Success,
    zIndex: 3000,
    theme: 'error',
  })
}
</script>
