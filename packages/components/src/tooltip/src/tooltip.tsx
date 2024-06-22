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

    // @floating-vue, see more https://floating-ui.com/
    const referenceRef = ref(null)
    const floatingRef = ref(null)
    const arrowRef = ref(null)
    // use computed create a ref which can let useFloating to update reactively
    const placement = computed(() => props.placement)
    const middleware = computed(() => [
      // offset must be the first middleware
      // every middleware will change the coordinate, so they should be in order
      offset(10),
      // shift the tooltip to make sure it is in the viewport
      // autoPlacemnet will automatically choose the best placement for the tooltip
      // flip the tooltip position to make sure it is in the viewport
      // see more about autoPlacement, shift and flit at https://floating-ui.com/docs/tutorial#middleware
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
    const triggerEvents = computed(() => {
      if (props.trigger === 'hover') {
        return {
          onMouseenter: () => {
            visibility.value = true
          },
          onMouseleave: () => {
            visibility.value = false
          },
        }
      } else {
        return {
          onClick: () => {
            visibility.value = !visibility.value
          },
        }
      }
    })

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
          ...triggerEvents.value,
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
