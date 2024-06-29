import callMessage from './instance'
import {
  MessageOptions,
  SyntacticMessageFunction,
  messageTheme,
} from './message'

// syntactic suger message function
// RaMessage.primary() RaMessage.success()
for (const theme of messageTheme) {
  ;(callMessage as SyntacticMessageFunction)[theme] = (
    options: MessageOptions
  ) => {
    callMessage({
      ...options,
      theme,
    })
  }
}

export default callMessage as SyntacticMessageFunction
