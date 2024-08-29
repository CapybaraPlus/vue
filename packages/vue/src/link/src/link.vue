<template>
  <a
    :class="[ucn.b(), ucn.m(type), ucn.is(disabled, 'disabled')]"
    :href="disabled ? undefined : href"
    :target="disabled ? undefined : target"
    @click="$emit('click', $event)"
  >
    <span :class="ucn.e('inner')">
      <slot></slot>
    </span>
  </a>
</template>

<script setup lang="ts">
import { useClassName } from '@capybara-plus/hooks'
import { linkProps, linkEmit } from './link'
import '../styles'

const ucn = useClassName('link')
defineOptions({
  name: 'RaLink',
})

defineProps(linkProps)
defineEmits(linkEmit)
</script>
