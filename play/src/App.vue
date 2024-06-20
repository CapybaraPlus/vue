<template>
  <ra-link href="https://www.baidu.com" icon="none" target="_blank"
    >default</ra-link
  >
  <ra-link href="https://www.baidu.com" theme="primary" target="_blank"
    >primary</ra-link
  >
  <ra-link href="https://www.baidu.com" disabled target="_blank"
    >disabled</ra-link
  >
  <ra-link href="https://www.baidu.com" icon="external-link" target="_blank"
    >default</ra-link
  >
  <ra-icon :color="color" size="2em">
    <ExternalLink></ExternalLink>
  </ra-icon>
  <ra-button
    theme="primary"
    hover-animation="zoom-in"
    active-animation="zoom-out"
    block
    @click="handleClick"
    >点击</ra-button
  >
</template>

<script setup lang="ts">
// import RaButton from '@capybara-ui/components/src/button'
// import RaLink from '@capybara-ui/components/src/link'
import { ExternalLink } from '@capybara-plus/icons-vue'
import { ref } from 'vue'

const color = ref('red')

const handleClick = () => {
  color.value = 'blue'
}
</script>

<style scoped></style>
