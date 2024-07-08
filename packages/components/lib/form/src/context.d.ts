import { UnwrapRef } from 'vue';
import { FormItemProps, FormProps } from './form';

export declare const useLabelWidth: () => {
    registerLabelWidth: (val: number) => void;
    deregisterLableWidth: (val: number) => void;
    labelWidth: import('vue').ComputedRef<number>;
};
export declare const useFormItemContext: () => {
    registerFormItemContext: (context: FormItemContext) => void;
    deregisterFormItemContext: (id: string) => void;
    resetValidateState: () => void;
    validate: () => Promise<void>;
};
export type FormContext = UnwrapRef<ReturnType<typeof useLabelWidth>> & FormProps & UnwrapRef<ReturnType<typeof useFormItemContext>>;
export type FormItemContext = FormItemProps & {
    validate: () => Promise<void> | undefined;
    resetValidateState: () => void;
    _id: string;
};
