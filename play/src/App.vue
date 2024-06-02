<template>
  <ra-button theme="default" @click="handleClick">default button</ra-button>
  <ra-button disabled theme="primary" hover-animation="zoom-in" size="large"
    >primary button</ra-button
  >
  <ra-button theme="success" size="medium">success button</ra-button>
  <ra-button theme="warning" size="small">warning button</ra-button>
  <ra-button theme="danger">danger button</ra-button>
</template>

<script setup lang="ts">
const handleClick = () => {
  console.log('clicked')
}
</script>

<style scoped></style>
