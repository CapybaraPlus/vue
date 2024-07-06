import { buildProps, definePropType } from '@capybara-plus/utils'
import { ExtractPropTypes, InjectionKey, VNode } from 'vue'
import { FormContext, formItemContext } from './context'
import { RuleItem, ValidateError, ValidateFieldsError } from 'async-validator'

// expand RuleItem from 'async-validator'
interface ExpandingRuleItem extends RuleItem {
  trigger?: string
  errorMessage?: string | VNode
  successMessage?: string | VNode
}

export interface FormRules {
  [x: string]: ExpandingRuleItem
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

// 'async-validate' error type
export type FormValidateError = {
  errors: ValidateError[]
  fileds: ValidateFieldsError
}
