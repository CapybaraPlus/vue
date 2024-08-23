<template>
  <div
    ref="selectionRef"
    :class="[ucn.b(), ucn.m(size)]"
    :style="selectionStyles"
  >
    <ra-tooltip
      ref="tooltipRef"
      trigger="click"
      :style="tooltipStyles"
      :show-arrow="false"
      offset="0"
      :transition="useTransition('selection-menu')"
      use-show
      :trigger-el="selectionRef"
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
            <div>
              <div :class="ucn.e('label')">
                <template v-if="multiple">
                  <div :class="ucn.e('label-group')">
                    <LabelSlot
                      v-for="option in selectedOption as HandleOption[]"
                      :key="option.id"
                      :label="option.label"
                    />
                  </div>
                </template>
                <template v-else>
                  <LabelSlot :label="(selectedOption as HandleOption).label" />
                </template>
              </div>
            </div>
          </template>
          <div :class="[ucn.e('suffix')]">
            <ra-icon
              v-show="selectedOption"
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
        <div :class="[ucn.e('menu')]" :style="menuStyles">
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
import { computed, CSSProperties, provide, ref } from 'vue'
import '../styles'
import { selectionEmits, selectionProps } from './selection'
import {
  HandleOption,
  selectionContextKey,
  useSelectionContext,
} from './context'
import { Close } from '@capybara-plus/icons-vue'
import LabelSlot from './label-slot.ts'

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

// selection context
const selectionContext = useSelectionContext(props.multiple)
provide(selectionContextKey, selectionContext)

// on change
selectionContext.on('change', (value: any) => {
  if (props.multiple) {
    modelValue.value = selectionContext
      .getSelectedOptions()
      .map((item) => item.value)
  } else {
    modelValue.value = value
  }
  ;(tooltipRef.value as unknown as TooltipExposed).close()
  emits('change', value)
})

// selected option
const selectedOption = computed(() => {
  if (props.multiple) {
    return selectionContext.getSelectedOptions()
  }
  return selectionContext.getCurrentOption()
})

// whether show placeholder or not
const showPlaceholder = computed(() => {
  if (!selectedOption.value) return true
  if (props.multiple) {
    return (selectedOption.value as HandleOption[]).length === 0
  }
  return false
})

// clear
const clear = () => {
  selectionContext.clearSelected()
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
