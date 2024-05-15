<template>
  <div :class="[ucn.m(modifier), ucn.b()]">
    {{ ucn.m(modifier) }}
    <button @click="handleClick">点击</button>
    {{ ucn.b() }}
  </div>
</template>

<script setup lang="ts">
import { useClassName } from '@capybara-ui/utils'
import { ref } from 'vue'

defineOptions({
  name: "RaButton"
})

const ucn = useClassName('button')

const modifier = ref('primary')
const handleClick = () => {
  modifier.value = 'success'
}
</script>

<style scoped></style>
