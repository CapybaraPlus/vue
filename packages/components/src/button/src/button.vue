<template>
  <div :class="[ucn.b()]">
    <button @click="handleClick">点击</button>
  </div>
</template>

<script setup lang="ts">
import { useClassName, useComponetName } from '@capybara-ui/hooks'
import { PropType } from 'vue'

const ucn = useClassName('button')
defineOptions({
  name: useComponetName('button'),
})

interface Person {
  name: string
  age: number
}

defineProps({
  person: {
    type: Object as PropType<Person>,
    required: true,
  },
})
</script>

<style scoped></style>
