<template>
  <div
    ref="selectionRef"
    :tabindex="tabindex"
    :class="[ucn.b(), ucn.m(size), ucn.is(theme), ucn.is(disabled, 'disabled')]"
    :style="selectionStyles"
    @keydown="handleKeyDown"
  >
    <ra-tooltip
      ref="tooltipRef"
      trigger="click"
      :style="tooltipStyles"
      :show-arrow="false"
      offset="10"
      :transition="useTransition('selection-menu')"
      use-show
      :trigger-el="selectionRef"
      :disabled="disabled"
    >
      <template #default>
        <div :class="[ucn.e('wrapper')]">
          <input
            :class="ucn.e('inner')"
            type="text"
            readonly
            :value="modelValue"
          />
          <template v-if="showPlaceholder">
            <div :class="[ucn.e('placeholder')]">
              {{ placeholder ?? 'Please Select' }}
            </div>
          </template>
          <template v-else>
            <div :class="ucn.e('label')">
              <template v-if="multiple">
                <div
                  v-for="item in (currentLabel as any[])"
                  :key="item.id"
                  :class="ucn.e('label-item')"
                >
                  {{ item.props.label }}
                </div>
              </template>
              <template v-else>
                {{ currentLabel }}
              </template>
            </div>
          </template>
          <div :class="[ucn.e('suffix')]">
            <ra-icon
              v-show="currentLabel"
              :class="ucn.e('clear')"
              size=".7em"
              @click.stop="clear"
            >
              <Close />
            </ra-icon>
          </div>
        </div>
      </template>
      <template #content>
        <div
          ref="selectionMenuRef"
          :class="[ucn.e('menu')]"
          :style="menuStyles"
        >
          <slot name="default"></slot>
        </div>
      </template>
    </ra-tooltip>
  </div>
</template>

<script setup lang="ts">
import { useClassName, useTransition, useUnit } from '@capybara-plus/hooks'
import RaIcon from '@capybara-plus/components/src/icon'
import RaTooltip, {
  TooltipExposed,
} from '@capybara-plus/components/src/tooltip'
import { useElementSize } from '@vueuse/core'
import {
  computed,
  CSSProperties,
  nextTick,
  provide,
  ref,
  watchEffect,
} from 'vue'
import '../styles'
import { selectionEmits, selectionProps } from './selection'
import { selectionContextKey, useSelectionContext } from './context'
import { Close } from '@capybara-plus/icons-vue'

// bem
const ucn = useClassName('selection')

defineOptions({
  name: 'RaSelection',
})
// v-model
const modelValue = defineModel({
  type: [Object, String, Number, Array],
})
const props = defineProps(selectionProps) // props
const emits = defineEmits(selectionEmits) // emits

// template ref
const tooltipRef = ref(null)
const selectionRef = ref(null)
const selectionMenuRef = ref<HTMLDivElement | null>(null)

// selection context
const selectionContext = useSelectionContext({
  props,
})
provide(selectionContextKey, selectionContext)

// modelValue watch
watchEffect(() => {
  if (props.multiple)
    modelValue.value = selectionContext
      .getMultipleOptions()
      .map((option) => option.props.value)
  else modelValue.value = selectionContext.getCurrentOption()?.props.value
})

// on change
selectionContext.on('select', (value: any) => {
  if (!props.multiple) {
    closeTooltip()
  }

  emits('input', value)

  if (modelValue.value !== value) {
    emits('change', value)
  }
})

const closeTooltip = () => {
  ;(tooltipRef.value as unknown as TooltipExposed).close()
}

// selected option
const currentLabel = computed(() => {
  if (props.multiple) {
    return selectionContext.getMultipleOptions().length == 0
      ? null
      : selectionContext.getMultipleOptions()
  }
  const currentOption = selectionContext.getCurrentOption()
  if (!currentOption) return
  const { props: optionProps } = currentOption
  return optionProps.label
})

// whether show placeholder or not
const showPlaceholder = computed(() => {
  return !currentLabel.value
})

// clear
const clear = () => {
  selectionContext.clearSelected()
}

// handle key down:
// arrow down and arrow up to move focus index
// enter to select option
const handleKeyDown = (e: KeyboardEvent) => {
  e.preventDefault()
  switch (e.key) {
    case 'ArrowDown':
      selectionContext.moveIndex(1)
      nextTick(() => {
        scrollIntoFoucsedOption()
      })
      break
    case 'ArrowUp':
      selectionContext.moveIndex(-1)
      nextTick(() => {
        scrollIntoFoucsedOption()
      })
      break
    case 'Enter':
      selectionContext.selectOption()
      closeTooltip()
      break
  }
}

// scroll into focused option
const scrollIntoFoucsedOption = () => {
  const focusedOptions = selectionMenuRef.value?.querySelector('.is-focused')
  if (focusedOptions) {
    focusedOptions.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    })
  }
}

// computed tooltip styles
const { width: tooltipWidth } = useElementSize(selectionRef)
const tooltipStyles = computed(() => {
  return {
    width: `${tooltipWidth.value}px`,
    padding: 0,
  }
})
// computed menu styles
const menuStyles = computed<CSSProperties>(() => {
  let _height = useUnit(props.height, 'px')
  return {
    'max-height': _height,
  }
})
// computed selection styles
const selectionStyles = computed<CSSProperties>(() => {
  const _width = useUnit(props.width, 'px')
  return {
    width: _width,
  }
})
</script>
