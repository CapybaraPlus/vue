import Form from './src/form.tsx'
import FormItem from './src/form-item.tsx'
import { withInstall } from '@capybara-plus/utils'
import './styles/index.ts'

export const RaForm = withInstall(Form)
export const RaFormItem = withInstall(FormItem)
