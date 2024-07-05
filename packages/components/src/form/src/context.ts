import { computed, Ref, ref, UnwrapRef } from 'vue'
import { FormItemProps, FormProps } from './form'

export const useLabelWidth = () => {
  const labelWidthArray: Ref<Array<number>> = ref([])

  // register: push the width of the label to the array
  function registerLabelWidth(val: number) {
    labelWidthArray.value.push(val)
  }

  // deregsiter: remove the label width from the array
  function deregisterLableWidth(val: number) {
    const targetIndex = getLabelWidthIndex(val)
    if (targetIndex != -1) {
      labelWidthArray.value.splice(targetIndex, 1)
    }
  }

  // get the label width index from the array
  function getLabelWidthIndex(val: number) {
    return labelWidthArray.value.findIndex((labelWidth) => labelWidth === val)
  }

  // computed label width
  const labelWidth = computed(() => {
    return labelWidthArray.value.length > 0
      ? Math.max(...labelWidthArray.value)
      : 0
  })

  return {
    registerLabelWidth,
    deregisterLableWidth,
    labelWidth,
  }
}

export type FormContext = UnwrapRef<ReturnType<typeof useLabelWidth>> &
  FormProps

export type formItemContext = FormItemProps
