<template>
  <div ref="selectionRef" :class="[ucn.b()]">
    <ra-tooltip
      trigger="click"
      :style="tooltipStyles"
      :show-arrow="false"
      offset="0"
      :transition="useTransition('selection-menu')"
      use-show
    >
      <template #default>
        <div :class="[ucn.e('wrapper')]">
          <input
            :class="ucn.e('inner')"
            type="text"
            readonly
            :value="modelValue"
          />
          <!-- label -->
          <template v-if="currentLabel">
            <div :class="ucn.e('label')">
              <LabelSlot :label="currentLabel"></LabelSlot>
            </div>
          </template>
          <!-- placeholder -->
          <template v-else>
            <div :class="[ucn.e('placeholder')]">
              {{ placeholder ?? 'Please Select' }}
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
        <div :class="[ucn.e('menu')]" :style="menuStyles">
          <slot name="default"></slot>
        </div>
      </template>
    </ra-tooltip>
  </div>
</template>

<script setup lang="ts">
import { useClassName, useTransition } from '@capybara-plus/hooks'
import RaIcon from '@capybara-plus/components/src/icon'
import RaTooltip from '@capybara-plus/components/src/tooltip'
import { useElementSize } from '@vueuse/core'
import { computed, provide, ref } from 'vue'
import '../styles'
import { selectionEmits, selectionProps } from './selection'
import { isNumber } from '@capybara-plus/utils'
import { selectionContextKey, useSelectionContext } from './context'
import { Close } from '@capybara-plus/icons-vue'
import LabelSlot from './label-slot.ts'

// bem
const ucn = useClassName('selection')

defineOptions({
  name: 'RaSelection',
})
// v-model
const modelValue = defineModel({
  type: [Object, String, Number],
})
const props = defineProps(selectionProps) // props
const emits = defineEmits(selectionEmits) // emits

// selection context
const selectionContext = useSelectionContext()
provide(selectionContextKey, selectionContext)
selectionContext.on('change', (value: any) => {
  console.log(currentLabel.value)
  modelValue.value = value
  emits('change', value)
})
const currentLabel = computed(() => selectionContext?.getCurrentOption()?.label)

// const renderLabel = computed(() => {
//   return {
//     render() {
//       if (isFunction(currentLabel)) {
//         return h((currentLabel.value as Slot<any>)())
//       }
//     },
//   }
// })

// clear
const clear = () => {
  selectionContext.clearSelected()
}

const selectionRef = ref(null)
// computed tooltip styles
const { width: tooltipWidth } = useElementSize(selectionRef)
const tooltipStyles = computed(() => {
  return {
    width: `${tooltipWidth.value}px`,
    padding: 0,
  }
})
// computed menu styles
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
