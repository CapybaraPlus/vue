import { VNode, h, defineComponent, StyleValue } from 'vue'
import { tooltipProps } from './tooltip'
import { ref, computed, Transition } from 'vue'
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  autoPlacement,
  shift,
  arrow,
} from '@floating-ui/vue'
import { useClassName, useTransition } from '@capybara-plus/hooks'
import '../styles'
import { onClickOutside } from '@vueuse/core'

export default defineComponent({
  name: 'RaTooltip',
  components: {
    Transition,
  },
  inheritAttrs: false,
  props: {
    ...tooltipProps,
  },

  setup(props, { slots, attrs }) {
    // bem class
    const block = 'tooltip'
    const ucn = useClassName(block)

    // to control the tooltip floating visibility
    const visibility = ref(false)

    // @floating-vue, see more https://floating-plus.com/
    const referenceRef = ref(null)
    const floatingRef = ref(null)
    const arrowRef = ref(null)
    // use computed create a ref which can let useFloating to update reactively
    const placement = computed(() => props.placement)
    const middleware = computed(() => [
      // offset must be the first middleware
      // every middleware will change the coordinate, so they should be in order
      offset(parseFloat(props.offset.toString())),
      // shift the tooltip to make sure it is in the viewport
      // autoPlacemnet will automatically choose the best placement for the tooltip
      // flip the tooltip position to make sure it is in the viewport
      // see more about autoPlacement, shift and flit at https://floating-plus.com/docs/tutorial#middleware
      props.autoPlacement ? autoPlacement() : flip(),
      shift(),
      arrow({
        element: arrowRef,
      }),
    ])
    const {
      floatingStyles: floatingUIStyles,
      middlewareData,
      placement: floatingPlacement,
    } = useFloating(referenceRef, floatingRef, {
      whileElementsMounted: autoUpdate,
      placement,
      middleware,
    })

    const floatingStyles = computed(() => {
      let display = ''
      if (props.useShow) {
        display = visibility.value && !props.disabled ? '' : 'none'
      }
      return {
        ...floatingUIStyles.value,
        ...(attrs.style ?? {}),
        display,
      }
    })

    // computed floating arrow styles
    const floatingArrowStyles = computed(() => {
      if (!props.showArrow) return
      return {
        position: 'absolute',
        left:
          middlewareData.value.arrow?.x != null
            ? `${middlewareData.value.arrow.x}px`
            : '',
        top:
          middlewareData.value.arrow?.y != null
            ? `${middlewareData.value.arrow.y}px`
            : '',
        [floatingPlacement.value.split('-')[0]]:
          'calc(100% - (var(--ra-tooltip-arrow-size) / 2))',
      }
    })

    // trigger events
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

            // when click outside of the target, close the tooltip
            onClickOutside(referenceRef, () => {
              visibility.value = false
            })
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
      const FirstNode = nodes[0]
      // create reference node
      function createReferenceNode() {
        return h(FirstNode as VNode, {
          ref: referenceRef,
          class: ucn.m('reference'),
          ...triggerEvents.value,
        })
      }
      // create floating node
      function createFloatingNode() {
        return (
          <Transition name={props.transition ?? useTransition(block)}>
            {props.useShow || (visibility.value && !props.disabled) ? (
              <div
                class={[ucn.b()]}
                ref={floatingRef}
                style={{ ...floatingStyles.value, ...(attrs.style ?? {}) }}
              >
                {slots?.content?.() ?? props?.content}
                {props.showArrow ? (
                  <div
                    class={ucn.e('arrow')}
                    ref={arrowRef}
                    style={floatingArrowStyles.value as StyleValue}
                  ></div>
                ) : null}
              </div>
            ) : null}
          </Transition>
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
