import { ExtractPropTypes, InjectionKey, VNode } from 'vue';
import { FormContext, FormItemContext } from './context';
import { RuleItem, ValidateError, ValidateFieldsError } from 'async-validator';

interface ExpandingRuleItem extends RuleItem {
    trigger?: string;
    errorMessage?: string | VNode;
    successMessage?: string | VNode;
}
export interface FormRules {
    [x: string]: ExpandingRuleItem;
}
export declare const formProps: {
    model: {
        readonly type: import('vue').PropType<any> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: () => void;
    };
    rules: {
        readonly type: import('vue').PropType<void | FormRules> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: () => void;
    };
};
export declare const formItemProps: {
    label: {
        readonly type: import('vue').PropType<string> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: unknown;
    };
    prop: {
        readonly type: import('vue').PropType<string> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: unknown;
    };
};
export type FormProps = ExtractPropTypes<typeof formProps>;
export type FormItemProps = ExtractPropTypes<typeof formItemProps>;
export declare const FormContextKey: InjectionKey<FormContext>;
export declare const FormItemContextKey: InjectionKey<FormItemContext>;
export type FormValidateError = {
    errors: ValidateError[];
    fileds: ValidateFieldsError;
};
export declare const FormItemId: () => string;
export {};
