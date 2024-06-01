<template>
  <div :class="[ucn.b()]">
    <button @click="handleClick">点击</button>
  </div>
</template>

<script setup lang="ts">
import { useClassName, useComponetName } from '@capybara-ui/hooks'
// import { buttonProps } from './button'

const ucn = useClassName('button')
defineOptions({
  name: useComponetName('button'),
})
</script>

<style scoped></style>
