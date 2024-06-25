import { defineComponent, h, ref } from 'vue'
import { maskProps } from './mask'
import { useClassName } from '@capybara-ui/hooks'

export default defineComponent({
  name: 'RaMask',
  props: {
    ...maskProps,
  },
  setup(props, { slots }) {
    // bem
    const ucn = useClassName('mask')

    // control visibility of the mask
    const visibility = ref(false)

    // render
    return () => {
      const childrenNodes = slots.default?.()

      // create mask node function
      const createMaskNode = () => {
        if (!visibility.value) {
          return null
        }
        return (
          <div class={ucn.e('inner')}>
            {slots.content ? slots.content() : props.content}
          </div>
        )
      }

      // create final node
      const createFinalNode = () => {
        // events
        const handleMouseEnter = () => {
          visibility.value = true
        }
        const handleMouseLeave = () => {
          visibility.value = false
        }
        // create node
        const firstChildNode = childrenNodes?.[0] // only render the first node
        if (!firstChildNode) {
          return null
        } else {
          return (
            <div
              class={ucn.b()}
              onMouseenter={handleMouseEnter}
              onMouseleave={handleMouseLeave}
            >
              {h(firstChildNode, { class: ucn.e('reference') })}
              {createMaskNode()}
            </div>
          )
        }
      }

      return createFinalNode()
    }
  },
})
