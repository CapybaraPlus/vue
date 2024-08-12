<template>
  <div ref="selectionRef" :class="[ucn.b()]">
    <ra-tooltip
      trigger="click"
      :style="tooltipStyles"
      :show-arrow="false"
      offset="0"
      :transition="useTransition('selection-menu')"
    >
      <template #default>
        <div :class="[ucn.e('wrapper')]">
          <input
            :class="ucn.e('inner')"
            type="text"
            readonly
            :value="modelValue"
          />
          <div :class="[ucn.e('placeholder')]">Please Select</div>
          <div :claass="[ucn.e('suffix')]"></div>
        </div>
      </template>
      <template #content>
        <div :class="[ucn.e('menu')]" :style="menuStyles">
          <slot name="default"></slot>
        </div>
      </template>
    </ra-tooltip>
  </div>
</template>

<script setup lang="ts">
import { useClassName, useTransition } from '@capybara-plus/hooks'
import RaTooltip from '@capybara-plus/components/src/tooltip'
import { useElementSize } from '@vueuse/core'
import { computed, ref } from 'vue'
import '../styles'
import { selectionProps } from './selection'
import { isNumber } from '@capybara-plus/utils'

// bem
const ucn = useClassName('selection')
defineOptions({
  name: 'RaSelection',
})
const modelValue = defineModel({
  type: [Object, String, Number],
})
const props = defineProps(selectionProps)

const selectionRef = ref(null)
const { width: tooltipWidth } = useElementSize(selectionRef)
const tooltipStyles = computed(() => {
  return {
    width: `${tooltipWidth.value}px`,

    padding: 0,
  }
})
const menuStyles = computed(() => {
  let _height = props.height ?? ''
  if (props.height) {
    if (isNumber(props.height)) {
      _height = `${props.height}px`
    }
  }
  return {
    'max-height': _height,
  }
})
</script>
