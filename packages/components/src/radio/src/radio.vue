<template>
  <label
    ref="labelRef"
    :class="[
      ucn.b(),
      ucn.m(theme),
      ucn.m(size),
      ucn.is(checked, 'checked'),
      ucn.is(disabled, 'disabled'),
    ]"
    @mousedown="handleMouseDown"
  >
    <input
      v-model="modelValue"
      type="radio"
      :class="ucn.e('inner')"
      :name="name"
      :value="value"
      :checked="checked"
      :disabled="disabled"
      @change="handleChange"
    />
    <div :class="ucn.e('label')">
      <slot>
        {{ label }}
      </slot>
    </div>
  </label>
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { ucn, useRadioContext } from './context'
import { radioEmit, radioProps } from './radio'
import { RaRipple } from '@capybara-plus/components'

defineOptions({
  name: 'RaRadio',
})
const props = defineProps(radioProps) // props
const emit = defineEmits(radioEmit) // emit

const { name, modelValue, checked, disabled, theme, size } =
  useRadioContext(props)

const handleChange = () => {
  nextTick(() => emit('change', modelValue.value))
}

const labelRef = ref(null)
const handleMouseDown = (event: MouseEvent) => {
  if (theme.value === 'button') {
    const { color } = getComputedStyle(labelRef.value as unknown as HTMLElement)
    const zIndex = ref(0)
    RaRipple({
      parent: labelRef.value!,
      event,
      color,
      zIndex: zIndex.value,
      duration: 200,
    })
  }
  emit('mousedown', event)
}
</script>

<style scoped lang="scss"></style>
