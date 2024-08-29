import { buildProps, createId, definePropType } from '@capybara-plus/utils'
import { ExtractPropTypes, InjectionKey, VNode } from 'vue'
import { FormContext, FormItemContext } from './context'
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
    type: definePropType<FormRules | void>(Object),
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
export const FormItemContextKey: InjectionKey<FormItemContext> =
  Symbol('formItemContext')

// 'async-validate' error type
export type FormValidateError = {
  errors: ValidateError[]
  fileds: ValidateFieldsError
}

export const FormItemId = () => createId('form-item')
