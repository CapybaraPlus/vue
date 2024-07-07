import { inject } from 'vue'
import { FormContextKey, FormItemContextKey } from './form'

export const useFormContext = () => {
  const formContext = inject(FormContextKey, undefined)
  const formItemContext = inject(FormItemContextKey, undefined)

  return {
    formContext,
    formItemContext,
  }
}
