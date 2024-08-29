import { computed, Ref, ref, UnwrapRef } from 'vue'
import { FormItemProps, FormProps } from './form'

// label width
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

// form item context
export const useFormItemContext = () => {
  const formItemContextArr = ref<Array<FormItemContext>>([])

  // register to the item context array
  function registerFormItemContext(context: FormItemContext) {
    formItemContextArr.value.push(context)
  }

  // deregister form the item context array
  function deregisterFormItemContext(id: string) {
    const targetIndex = getFormItemContext(id)
    if (targetIndex != -1) {
      formItemContextArr.value.splice(targetIndex, 1)
    }
  }

  // get form item context index
  function getFormItemContext(id: string) {
    const targetIndex = formItemContextArr.value.findIndex(
      (context) => context._id === id
    )
    return targetIndex
  }

  // reset all form item context validate state to 'pending'
  function resetValidateState() {
    formItemContextArr.value.forEach((context) => {
      context.resetValidateState()
    })
  }

  // validate all form item
  async function validate() {
    return new Promise<void>((resolve, reject) => {
      Promise.all(formItemContextArr.value.map((context) => context.validate()))
        .then(() => {
          resolve()
        })
        .catch(() => {
          reject()
        })
    })
  }

  return {
    registerFormItemContext,
    deregisterFormItemContext,
    resetValidateState,
    validate,
  }
}

export type FormContext = UnwrapRef<ReturnType<typeof useLabelWidth>> &
  FormProps &
  UnwrapRef<ReturnType<typeof useFormItemContext>>

export type FormItemContext = FormItemProps & {
  validate: () => Promise<void> | undefined
  resetValidateState: () => void
  _id: string
}
