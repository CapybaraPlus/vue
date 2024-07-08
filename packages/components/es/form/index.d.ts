import { default as Form } from './src/form.vue';
import { default as FormItem } from './src/form-item.vue';
import { buildInstance } from '@capybara-plus/utils';

export declare const RaForm: {
    new (...args: any[]): import('vue').CreateComponentPublicInstance<Readonly<import('vue').ExtractPropTypes<{
        model: {
            readonly type: import('vue').PropType<any> | null | undefined;
            readonly required?: false | undefined;
            readonly validator?: ((val: any) => boolean) | undefined;
            readonly default: () => void;
        };
        rules: {
            readonly type: import('vue').PropType<void | import('./src/form.ts').FormRules> | null | undefined;
            readonly required?: false | undefined;
            readonly validator?: ((val: any) => boolean) | undefined;
            readonly default: () => void;
        };
    }>>, {
        reset: () => void;
        validate: () => Promise<void>;
    }, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
        model: {
            readonly type: import('vue').PropType<any> | null | undefined;
            readonly required?: false | undefined;
            readonly validator?: ((val: any) => boolean) | undefined;
            readonly default: () => void;
        };
        rules: {
            readonly type: import('vue').PropType<void | import('./src/form.ts').FormRules> | null | undefined;
            readonly required?: false | undefined;
            readonly validator?: ((val: any) => boolean) | undefined;
            readonly default: () => void;
        };
    }>>, {
        model: any;
        rules: void | import('./src/form.ts').FormRules;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        model: {
            readonly type: import('vue').PropType<any> | null | undefined;
            readonly required?: false | undefined;
            readonly validator?: ((val: any) => boolean) | undefined;
            readonly default: () => void;
        };
        rules: {
            readonly type: import('vue').PropType<void | import('./src/form.ts').FormRules> | null | undefined;
            readonly required?: false | undefined;
            readonly validator?: ((val: any) => boolean) | undefined;
            readonly default: () => void;
        };
    }>>, {
        reset: () => void;
        validate: () => Promise<void>;
    }, {}, {}, {}, {
        model: any;
        rules: void | import('./src/form.ts').FormRules;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    model: {
        readonly type: import('vue').PropType<any> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: () => void;
    };
    rules: {
        readonly type: import('vue').PropType<void | import('./src/form.ts').FormRules> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: () => void;
    };
}>>, {
    reset: () => void;
    validate: () => Promise<void>;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    model: any;
    rules: void | import('./src/form.ts').FormRules;
}, {}, string, {}> & (import('vue').VNodeProps & (import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & ((new () => {
    $slots: {
        default?(_: {}): any;
    };
}) & import('vue').Plugin)));
export declare const RaFormItem: {
    new (...args: any[]): import('vue').CreateComponentPublicInstance<Readonly<import('vue').ExtractPropTypes<{
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
    }>>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
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
    }>>, {
        label: string;
        prop: string;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
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
    }>>, {}, {}, {}, {}, {
        label: string;
        prop: string;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
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
}>>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    label: string;
    prop: string;
}, {}, string, {}> & (import('vue').VNodeProps & (import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & ((new () => {
    $slots: {
        label?(_: {}): any;
        default?(_: {}): any;
    };
}) & import('vue').Plugin)));
export type RaFormInstance = buildInstance<typeof Form>;
export type RaFormItemInstance = buildInstance<typeof FormItem>;
export * from './src/form.ts';
export * from './src/hooks.ts';
