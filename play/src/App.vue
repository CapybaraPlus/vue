<template>
  <ra-button
    active-animation="zoom-out"
    block
    shape="round"
    @click="handleClick"
    >default button</ra-button
  >
  <ra-button
    color="rgb(255, 109, 109)"
    block
    shape="round"
    theme="primary"
    hover-animation="zoom-in"
    size="large"
    disabled
    >primary button</ra-button
  >
  <ra-button active-animation="zoom-out" theme="success" size="medium"
    >success button</ra-button
  >
  <ra-button shape="round" theme="warning" size="small"
    >warning button</ra-button
  >
  <ra-button theme="danger">danger button</ra-button>
</template>

<script setup lang="ts">
const handleClick = () => {
  console.log('clicked')
}
</script>

<style scoped></style>
