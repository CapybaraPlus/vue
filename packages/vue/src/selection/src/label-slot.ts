import { isFunction, isString } from '@capybara-plus/utils'
import { defineComponent, type Slot } from 'vue'

export default defineComponent({
  props: {
    label: {
      type: [String, Function],
      default: '',
    },
  },
  setup(props) {
    if (!props.label) return
    if (isString(props.label)) {
      return () => props.label
    }
    if (isFunction(props.label)) {
      return () => (props.label as Slot<any>)()
    }
  },
})
