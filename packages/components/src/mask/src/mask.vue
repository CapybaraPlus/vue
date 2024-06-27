<template>
  <div
    v-if="visibility"
    :class="[ucn.b(), ucn.is(show)]"
    @click="onClick"
    @mousedown="onMousedown"
    @mouseup="onMouseup"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { maskProps, maskEmits } from './mask'
import { useClassName, useClick } from '@capybara-plus/hooks'
defineOptions({
  name: 'RaMask',
})
const $props = defineProps(maskProps)
const $emit = defineEmits(maskEmits)

// bem
const ucn = useClassName('mask')

// create or destory the mask component
const visibility = ref(false)
function setVisibility(visible: boolean) {
  // $emit('update:visibility', visibility)
  visibility.value = visible
}

function open() {
  setVisibility(true)
}
function close() {
  setVisibility(false)
}

// handle click
const handleClick = (e: MouseEvent) => {
  close()
  $emit('click', e)
}
const { onClick, onMousedown, onMouseup } = useClick({ handleClick })

const show = computed(() => ($props.show ? undefined : 'transparent'))

defineExpose({
  open,
  close,
})
</script>
