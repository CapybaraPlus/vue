<template>
  <button :class="[ucn.b(), ucn.m(_theme)]" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useClassName, useComponetName } from '@capybara-ui/hooks'
import { buttonProps, buttonEmits } from './button'
import '../styles/index'

const ucn = useClassName('button')
defineOptions({
  name: useComponetName('button'),
})

const $props = defineProps(buttonProps)
const $emit = defineEmits(buttonEmits)

const handleClick = (e: MouseEvent) => {
  $emit('click', e)
}

const _theme = computed(() =>
  $props.theme == 'default' ? undefined : $props.theme
)
</script>

<style scoped></style>
