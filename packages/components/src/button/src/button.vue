<template>
  <button :class="[ucn.b()]" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { useClassName, useComponetName } from '@capybara-ui/hooks'
import { buttonProps, buttonEmits } from './button'
import '../styles/index'

const ucn = useClassName('button')
defineOptions({
  name: useComponetName('button'),
})

defineProps(buttonProps)
const $emit = defineEmits(buttonEmits)

const handleClick = (e: MouseEvent) => {
  $emit('click', e)
}
</script>

<style scoped></style>
