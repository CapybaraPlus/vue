import { buildProps, definePropType } from '@capybara-plus/utils'
import { ExtractPropTypes, InjectionKey } from 'vue'
import { FormContext, formItemContext } from './context'
import { RuleItem } from 'async-validator'

interface FormRules {
  [x: string]: RuleItem
}

// form props
export const formProps = buildProps({
  model: {
    type: Object,
    default: () => {},
  },
  rules: {
    type: definePropType<FormRules>(Object),
    default: () => {},
  },
})
// form item props
export const formItemProps = buildProps({
  label: {
    type: String,
  },
  prop: {
    type: String,
  },
})

// typescript form props
export type FormProps = ExtractPropTypes<typeof formProps>
// typescript form item props
export type FormItemProps = ExtractPropTypes<typeof formItemProps>

// provide and inject key
export const FormContextKey: InjectionKey<FormContext> = Symbol('formContext')
export const FormItemContextKey: InjectionKey<formItemContext> =
  Symbol('formItemContext')
