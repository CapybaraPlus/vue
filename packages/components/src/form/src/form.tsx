import { defineComponent, provide, reactive, toRefs } from 'vue'
import { useClassName } from '@capybara-plus/hooks'
import { useLabelWidth } from './context'
import { FormContextKey, formProps } from './form'

export default defineComponent({
  name: 'RaForm',
  props: formProps,
  setup(props, { slots }) {
    const ucn = useClassName('form')

    provide(
      FormContextKey,
      reactive({
        ...toRefs(props),
        ...useLabelWidth(),
      })
    )

    return () => <form class={[ucn.b()]}>{slots.default?.()}</form>
  },
})
