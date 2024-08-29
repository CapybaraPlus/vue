import Form from './src/form.vue'
import FormItem from './src/form-item.vue'
import { buildInstance, withInstall } from '@capybara-plus/utils'
import './styles/index.ts'

export const RaForm = withInstall(Form)
export const RaFormItem = withInstall(FormItem)

// instance type
export type RaFormInstance = buildInstance<typeof Form>
export type RaFormItemInstance = buildInstance<typeof FormItem>

export * from './src/form.ts'
export * from './src/hooks.ts'
