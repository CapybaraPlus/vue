<template>
  <a
    :class="[ucn.b(), ucn.m(_theme), ucn.is(_disabled)]"
    :href="disabled ? undefined : href"
    :target="_disabled ? undefined : target"
    @click="$emit('click', $event)"
  >
    <span :class="ucn.e('inner')">
      <slot></slot>
      <template v-if="_icon">
        <ra-icon :class="[ucn.e('icon')]">
          <component :is="_icon"></component>
        </ra-icon>
      </template>
    </span>
  </a>
</template>

<script setup lang="ts">
import { useClassName } from '@capybara-ui/hooks'
import { linkProps, linkEmits } from './link'
import { computed } from 'vue'
import '../styles'
import { RaIcon } from '@capybara-ui/components/src/icon'
import { Link, Unlink, ExternalLink } from '@capybara-plus/icons-vue'

const ucn = useClassName('link')
defineOptions({
  name: 'RaLink',
})

const $props = defineProps(linkProps)
defineEmits(linkEmits)

const _theme = computed(() => ($props.theme == 'defualt' ? '' : $props.theme))
const _disabled = computed(() => ($props.disabled ? 'disabled' : ''))
const _icon = computed(() => {
  if ($props.icon == 'none') {
    return undefined
  } else if ($props.icon) {
    return $props.icon
  } else if (!$props.href) {
    return Unlink
  } else if ($props.target == '_blank') {
    return ExternalLink
  } else {
    return Link
  }
})
</script>
