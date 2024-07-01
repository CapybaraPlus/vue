import {
  computed,
  CSSProperties,
  defineComponent,
  h,
  onMounted,
  ref,
  Transition,
} from 'vue'
import { MessageExposed, MessageInstanceUtils, messageProps } from './message'
import { useClassName, useTransition } from '@capybara-plus/hooks'
import { RaIcon } from '../../icon'
import { Close } from '@capybara-plus/icons-vue'
import '../styles'
import { useResizeObserver, useTimeoutFn } from '@vueuse/core'

export default defineComponent({
  name: 'RaMessage',
  components: { RaIcon, Close },
  props: messageProps,
  setup(props, { expose }) {
    // bem
    const ucn = useClassName('message')

    // v-if to realize the transition component
    const visibility = ref(false)
    let stopTimer: (() => void) | undefined
    function open() {
      visibility.value = true
    }
    function close() {
      visibility.value = false
    }
    function autoClose() {
      if (props.duration <= 0) return
      const { stop } = useTimeoutFn(() => {
        close()
      }, props.duration)
      stopTimer = () => {
        stop?.()
      }
    }
    /**
     * @example package stopTimer can be proper functioning
     */
    function clearTimer() {
      stopTimer?.()
    }

    let instanceUtils: MessageInstanceUtils
    onMounted(() => {
      open()
      autoClose()
      instanceUtils = props.onMounted()
    })

    const messageRef = ref<HTMLDivElement>()
    // element height
    const clientHeight = ref(0)
    /**
     * observer when the message is resized
     * @see https://vueuse.org/useResizeObserver
     */
    useResizeObserver(messageRef, (entries) => {
      clientHeight.value = entries[0].target.clientHeight
    })
    // element offset the top
    const offsetTop = computed(
      () => instanceUtils?.getPrevBottom() + instanceUtils?.getGap()
    )
    // the bottom of the element offset the top
    const bottom = computed(() => offsetTop.value + clientHeight.value)

    // computed style
    const style = computed<CSSProperties>(() => {
      return {
        top: `${offsetTop.value}px`,
        zIndex: `${props.zIndex}`,
      }
    })

    // expose
    const exposed: MessageExposed = {
      close,
      bottom,
      offsetTop,
    }
    expose(exposed)

    return () => (
      <Transition
        name={useTransition('slide-bottom')}
        onBeforeLeave={props.onClose}
        onAfterLeave={props.afterClose}
      >
        {visibility.value ? (
          <div
            class={[ucn.b()]}
            style={style.value}
            ref={messageRef}
            onMouseleave={autoClose}
            onMouseenter={clearTimer}
          >
            {props.icon ? (
              <ra-icon class={[ucn.e('icon')]}>{h(props.icon)}</ra-icon>
            ) : null}
            <span class={[ucn.e('content')]}>{props.content}</span>
            <ra-icon class={[ucn.e('close')]} size=".7rem" onClick={close}>
              <Close />
            </ra-icon>
          </div>
        ) : null}
      </Transition>
    )
  },
})
