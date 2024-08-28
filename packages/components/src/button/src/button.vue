<template>
  <button
    ref="buttonRef"
    :class="[
      ucn.b(),
      ucn.m(_type),
      ucn.m(_size),
      ucn.m(_shape),
      ucn.m(_theme),
      ucn.is(disabled, 'disabled'),
      ucn.is(block, 'block'),
      ucn.is(_color.cls),
      ucn.is(loading, 'loading'),
    ]"
    :disabled="disabled || loading"
    :type="nativeType"
    :style="[_color.style]"
    @click="handleClick"
    @mousedown="handleMouseDown"
  >
    <template v-if="showLoadingIcon && loading">
      <ra-icon :class="ucn.e('loading-icon')">
        <slot name="loading-icon">
          <Loading />
        </slot>
      </ra-icon>
    </template>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { buttonProps, buttonEmit } from './button'
import '../styles/index'
import { useClassName } from '@capybara-plus/hooks'
import RaIcon from '../../icon'
import { Loading } from '@capybara-plus/icons-vue'
import { RaRipple } from '@capybara-plus/components'

// bem
const ucn = useClassName('button')

defineOptions({
  name: 'RaButton',
})
const props = defineProps(buttonProps) // props
const emit = defineEmits(buttonEmit) // emits

/**
 * @description handle ripple animation
 */
const buttonRef = ref(null)

const handleMouseDown = (e: MouseEvent) => {
  let color = undefined
  if (props.theme == 'plain') {
    if (props.color) {
      color = props.color
    }
    ;({ color: color } = getComputedStyle(
      buttonRef.value as unknown as Element
    ))
  }
  const ripple = RaRipple({
    parent: buttonRef.value!,
    event: e,
    color,
  })

  if (props.theme == 'plain') {
    function handleMouseup() {
      ripple.exposed?.close()
      window.removeEventListener('mouseup', handleMouseup)
    }
    window.addEventListener('mouseup', handleMouseup)
  }

  emit('mousedown', e)
}

// click event
const handleClick = (e: MouseEvent) => {
  emit('click', e)
}

/**
 * computed props
 */
// theme
const _type = computed(() =>
  props.type == 'default' || !props.type ? '' : props.type
)
// size
const _size = computed(() => (props.size == 'normal' ? '' : props.size))
// shape
const _shape = computed(() =>
  props.shape == 'default' ? undefined : props.shape
)
// custom color
const _color = computed(() => {
  let style = ''
  let cls = ''
  if (props.color) {
    cls = 'color'
    style = `--color: ${props.color}`
  }
  return {
    cls,
    style,
  }
})
// theme
const _theme = computed(() =>
  props.theme == 'default' || !props.theme ? '' : props.theme
)
</script>

<style scoped></style>
