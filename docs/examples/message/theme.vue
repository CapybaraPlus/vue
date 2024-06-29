<template>
  <ra-button @click="handleClick(undefined)">default</ra-button>
  <ra-button @click="handleClick('success')" theme="success">success</ra-button>
  <ra-button @click="handleClick('warning')" theme="warning">warning</ra-button>
  <ra-button @click="handleClick('error')" theme="danger">error</ra-button>
</template>

<script setup lang="ts">
import { RaMessage, MessageTheme } from '@capybara-plus/components'

const handleClick = (theme?: MessageTheme) => {
  RaMessage({
    content: `this is a ${theme ?? 'normal'} message`,
    theme,
  })
}
</script>
