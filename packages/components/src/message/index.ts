import Message from './src/instance'
import { withInstallFunction } from '@capybara-plus/utils'

export const RaMessage = withInstallFunction(Message, '$message')
export default RaMessage

export * from './src/message'
