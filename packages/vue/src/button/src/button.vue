<template>
  <button
    ref="buttonRef"
    :class="[
      ucn.b(),
      ucn.m(_type),
      ucn.m(_size),
      ucn.m(_shape),
      ucn.m(_theme),
      ucn.is(ripple, 'ripple'),
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
import { computed, reactive, ref, toRef } from 'vue'
import { buttonProps, buttonEmit } from './button'
import '../styles/index'
import { useClassName } from '@capybara-plus/hooks'
import RaIcon from '../../icon'
import { Loading } from '@capybara-plus/icons-vue'
import { RaRipple } from '@capybara-plus/vue'

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

// mousedown event
const handleMouseDown = (e: MouseEvent) => {
  handleRipple(e)
  emit('mousedown', e)
}

const ripple = ref(false)
// handle ripple
const handleRipple = (e: MouseEvent) => {
  let color = undefined
  if (props.theme == 'plain') {
    if (props.color) {
      color = props.color
    }
    ;({ color: color } = getComputedStyle(
      buttonRef.value as unknown as HTMLElement
    ))
  }

  const options = reactive({
    parent: buttonRef.value!,
    event: e,
    color,
    zIndex: -1,
    afterAnimationStart: () => {
      ripple.value = true
    },
    beforeAnimationEnd: () => {
      zIndex.value = 0
      ripple.value = false
    },
  })
  const zIndex = toRef(options, 'zIndex')
  RaRipple(options)
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
