import { VNode, h, defineComponent } from 'vue'
import { tooltipProps } from './tooltip'
import { ref, computed } from 'vue'
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  autoPlacement,
  shift,
  arrow,
} from '@floating-ui/vue'
import { useClassName } from '@capybara-ui/hooks'
import '../styles'

export default defineComponent({
  name: 'RaTooltip',
  props: {
    ...tooltipProps,
  },

  setup(props, { slots }) {
    // bem class
    const ucn = useClassName('tooltip')

    // to control the tooltip floating visibility
    const visibility = ref(false)

    // @floating-vue
    const referenceRef = ref(null)
    const floatingRef = ref(null)
    const arrowRef = ref(null)
    // use computed create a ref which can let useFloating to update reactively
    const placement = computed(() => props.placement)
    const middleware = computed(() => [
      offset(10),
      props.autoPlacement ? autoPlacement() : shift(),
      flip(),
      arrow({
        element: arrowRef,
      }),
    ])
    const { floatingStyles, middlewareData } = useFloating(
      referenceRef,
      floatingRef,
      {
        whileElementsMounted: autoUpdate,
        placement,
        middleware,
      }
    )

    /**
     * @todo compelete arrow
     */
    // computed floating arrow styles
    // const floatingArrowStyles = computed(() => {
    //   return {
    //     position: 'absolute',
    //     left:
    //       middlewareData.value.arrow?.x != null
    //         ? `${middlewareData.value.arrow.x}px`
    //         : '',
    //     top:
    //       middlewareData.value.arrow?.y != null
    //         ? `${middlewareData.value.arrow.y}px`
    //         : '',
    //   }
    // })

    return () => {
      // get content of tooltip package
      const nodes = slots.default?.()
      if (!nodes) {
        return null
      }
      // only the first node is considered as the reference node
      const handleNode = nodes[0]
      // create reference node
      function createReferenceNode() {
        return h(handleNode as VNode, {
          ref: referenceRef,
          class: ucn.m('reference'),
          onMouseenter: () => {
            visibility.value = true
          },
          onMouseleave: () => {
            visibility.value = false
          },
        })
      }
      // create floating node
      function createFloatingNode() {
        if (!visibility.value) {
          return null
        }
        return (
          <div
            class={[ucn.b()]}
            ref={floatingRef}
            style={{ ...floatingStyles.value }}
          >
            {slots?.content?.() ?? props?.content}
            {
              <div
                class={ucn.e('arrow')}
                ref={arrowRef}
                style={{
                  position: 'absolute',
                  left:
                    middlewareData.value.arrow?.x != null
                      ? `${middlewareData.value.arrow.x}px`
                      : '',
                  top:
                    middlewareData.value.arrow?.y != null
                      ? `${middlewareData.value.arrow.y}px`
                      : '',
                }}
              ></div>
            }
          </div>
        )
      }

      return (
        <>
          {createReferenceNode()}
          {createFloatingNode()}
        </>
      )
    }
  },
})
