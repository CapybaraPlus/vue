import {
  computed,
  CSSProperties,
  defineComponent,
  onMounted,
  ref,
  Transition,
} from 'vue'
import { MessageExposed, MessageInstanceUtils, messageProps } from './message'
import { useClassName, useTransition } from '@capybara-plus/hooks'
import { RaIcon } from '../../icon'
import { Close } from '@capybara-plus/icons-vue'
import '../styles'
import { TimerType } from 'packages/utils'
import { useResizeObserver } from '@vueuse/core'

export default defineComponent({
  name: 'RaMessage',
  components: { RaIcon, Close },
  props: messageProps,
  setup(props, { expose }) {
    // bem
    const ucn = useClassName('message')

    let openTimer: TimerType
    let closeTimer: TimerType
    // v-if to realize the transition component
    const visibility = ref(false)
    function open() {
      if (openTimer) clearTimeout(openTimer)
      openTimer = setTimeout(() => {
        visibility.value = true
        clearTimeout(openTimer)
      })
    }
    function close() {
      // clear autoCloseTimer to prevent the memory leak
      if (props.autoCloseTimer) clearTimeout(props.autoCloseTimer)
      visibility.value = false
      if (closeTimer) clearTimeout(closeTimer)
      closeTimer = setTimeout(() => {
        props.onClose()
        clearTimeout(closeTimer)
        if (props.autoCloseTimer) clearTimeout(props.autoCloseTimer)
      }, 200)
    }

    let instanceUtils: MessageInstanceUtils
    onMounted(() => {
      open()
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
      <Transition name={useTransition('slide-bottom')}>
        {visibility.value ? (
          <div class={[ucn.b()]} style={style.value} ref={messageRef}>
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
