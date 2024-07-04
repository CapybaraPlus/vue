import { withInstall, buildInstance } from '@capybara-plus/utils'
import Input from './src/input.tsx'

export const RaInput = withInstall(Input)
export default RaInput

export * from './src/input.ts'

// typescript instance of the component
export type RaInputInstance = buildInstance<typeof RaInput>
