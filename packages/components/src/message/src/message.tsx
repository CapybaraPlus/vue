import { TransitionGroup, defineComponent, onMounted, ref } from 'vue'
import { useClassName, useTransitionGroup } from '@capybara-plus/hooks'

import {
  MessageInstance,
  NormalizeMessageOptions,
  messageProps,
} from './message'
import '../styles'
import { RaIcon } from '../../icon/index'
import { Close } from '@capybara-plus/icons-vue'

export default defineComponent({
  name: 'RaMessage',
  components: { RaIcon },
  props: messageProps,
  setup(props) {
    // bems
    const ucn = useClassName('message')

    // message queue
    const messageQueue = ref<NormalizeMessageOptions[]>([])

    // create message instance
    function createMessageInstance(options: NormalizeMessageOptions) {
      const instance = {
        ...options,
      }
      messageQueue.value.push(instance)

      // auto close when the time is arrived
      function autoClose() {
        // if duration <= 0 then it will not close at all
        if (instance.duration! <= 0) {
          return
        }
        // if timer is seted, clear it
        if (instance.timer) {
          clearTimeout(instance.timer)
        } else {
          instance.timer = setTimeout(() => {
            close(instance._id)
            // clear timer to avoid memory leak
            if (instance.timer) clearTimeout(instance.timer)
          }, instance.duration)
        }
      }

      autoClose()
    }

    // close the message
    function close(id: string) {
      // find the target message
      const targetIndex = messageQueue.value.findIndex(
        (message) => message._id === id
      )
      // remove the target message
      if (targetIndex !== -1) messageQueue.value.splice(targetIndex, 1)
    }

    // deliver some methods to the instance.ts
    onMounted(() => {
      props.onReady({
        createMessageInstance,
      } as MessageInstance)
    })

    return () => (
      <div class={ucn.b('group')}>
        <TransitionGroup name={useTransitionGroup('slide-bottom')}>
          {messageQueue.value.map((message) => (
            <div class={[ucn.b()]} key={message._id}>
              <span class={[ucn.e('content')]}>{message.content}</span>
              <ra-icon
                class={ucn.e('close')}
                size=".7rem"
                onClick={() => close(message._id)}
              >
                <Close />
              </ra-icon>
            </div>
          ))}
        </TransitionGroup>
      </div>
    )
  },
})
