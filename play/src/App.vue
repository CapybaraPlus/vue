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
  <ra-link href="https://www.baidu.com" :icon="HashLink" target="_blank"
    >default</ra-link
  >
  <ra-link href="#" target="_blank" :icon="HashLink">custom icon</ra-link>
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
import { ExternalLink, HashLink } from '@capybara-plus/icons-vue'
import { ref } from 'vue'

const color = ref('red')

const handleClick = () => {
  color.value = 'blue'
}
</script>

<style scoped></style>
