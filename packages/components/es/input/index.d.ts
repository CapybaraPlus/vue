import { buildInstance } from '@capybara-plus/utils';

export declare const RaInput: {
    new (...args: any[]): import('vue').CreateComponentPublicInstance<Readonly<import('vue').ExtractPropTypes<{
        modelValue: {
            readonly type: import('vue').PropType<string | number | null | undefined> | null | undefined;
            readonly required?: false | undefined;
            readonly validator?: ((val: any) => boolean) | undefined;
            readonly default: unknown;
        };
        placeholder: {
            readonly type: import('vue').PropType<string> | null | undefined;
            readonly required?: false | undefined;
            readonly validator?: ((val: any) => boolean) | undefined;
            readonly default: string;
        };
        disabled: {
            readonly type: import('vue').PropType<boolean> | null | undefined;
            readonly required?: false | undefined;
            readonly validator?: ((val: any) => boolean) | undefined;
            readonly default: boolean;
        };
        clearable: {
            readonly type: import('vue').PropType<boolean> | null | undefined;
            readonly required?: false | undefined;
            readonly validator?: ((val: any) => boolean) | undefined;
            readonly default: boolean;
        };
        type: {
            readonly type: import('vue').PropType<"textarea" | "text" | "password"> | null | undefined;
            readonly required?: false | undefined;
            readonly validator?: ((val: any) => boolean) | undefined;
            readonly default: string;
        };
        readonly: {
            readonly type: import('vue').PropType<boolean> | null | undefined;
            readonly required?: false | undefined;
            readonly validator?: ((val: any) => boolean) | undefined;
            readonly default: boolean;
        };
        size: {
            readonly type: import('vue').PropType<"large" | "small"> | null | undefined;
            readonly required?: false | undefined;
            readonly validator?: ((val: any) => boolean) | undefined;
            readonly default: unknown;
        };
        theme: {
            readonly type: import('vue').PropType<"line" | "mask"> | null | undefined;
            readonly required?: false | undefined;
            readonly validator?: ((val: any) => boolean) | undefined;
            readonly default: unknown;
        };
        autoComplete: {
            readonly type: import('vue').PropType<any> | null | undefined;
            readonly required?: false | undefined;
            readonly validator?: ((val: any) => boolean) | undefined;
            readonly default: string;
        };
        maxlength: {
            readonly type: import('vue').PropType<string | number> | null | undefined;
            readonly required?: false | undefined;
            readonly validator?: ((val: any) => boolean) | undefined;
            readonly default: unknown;
        };
        minlength: {
            readonly type: import('vue').PropType<string | number> | null | undefined;
            readonly required?: false | undefined;
            readonly validator?: ((val: any) => boolean) | undefined;
            readonly default: unknown;
        };
        showCount: {
            readonly type: import('vue').PropType<boolean> | null | undefined;
            readonly required?: false | undefined;
            readonly validator?: ((val: any) => boolean) | undefined;
            readonly default: boolean;
        };
    }>> & {
        onFocus?: ((e: FocusEvent) => any) | undefined;
        onBlur?: ((e: FocusEvent) => any) | undefined;
        onChange?: ((e: string) => any) | undefined;
        onInput?: ((e: string) => any) | undefined;
        onKeydown?: ((e: KeyboardEvent) => any) | undefined;
        "onUpdate:modelValue"?: ((val: string) => any) | undefined;
    }, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        input: (e: string) => boolean;
        change: (e: string) => boolean;
        focus: (e: FocusEvent) => boolean;
        blur: (e: FocusEvent) => boolean;
        keydown: (e: KeyboardEvent) => boolean;
        "update:modelValue": (val: string) => boolean;
    }, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
        modelValue: {
            readonly type: import('vue').PropType<string | number | null | undefined> | null | undefined;
            readonly required?: false | undefined;
            readonly validator?: ((val: any) => boolean) | undefined;
            readonly default: unknown;
        };
        placeholder: {
            readonly type: import('vue').PropType<string> | null | undefined;
            readonly required?: false | undefined;
            readonly validator?: ((val: any) => boolean) | undefined;
            readonly default: string;
        };
        disabled: {
            readonly type: import('vue').PropType<boolean> | null | undefined;
            readonly required?: false | undefined;
            readonly validator?: ((val: any) => boolean) | undefined;
            readonly default: boolean;
        };
        clearable: {
            readonly type: import('vue').PropType<boolean> | null | undefined;
            readonly required?: false | undefined;
            readonly validator?: ((val: any) => boolean) | undefined;
            readonly default: boolean;
        };
        type: {
            readonly type: import('vue').PropType<"textarea" | "text" | "password"> | null | undefined;
            readonly required?: false | undefined;
            readonly validator?: ((val: any) => boolean) | undefined;
            readonly default: string;
        };
        readonly: {
            readonly type: import('vue').PropType<boolean> | null | undefined;
            readonly required?: false | undefined;
            readonly validator?: ((val: any) => boolean) | undefined;
            readonly default: boolean;
        };
        size: {
            readonly type: import('vue').PropType<"large" | "small"> | null | undefined;
            readonly required?: false | undefined;
            readonly validator?: ((val: any) => boolean) | undefined;
            readonly default: unknown;
        };
        theme: {
            readonly type: import('vue').PropType<"line" | "mask"> | null | undefined;
            readonly required?: false | undefined;
            readonly validator?: ((val: any) => boolean) | undefined;
            readonly default: unknown;
        };
        autoComplete: {
            readonly type: import('vue').PropType<any> | null | undefined;
            readonly required?: false | undefined;
            readonly validator?: ((val: any) => boolean) | undefined;
            readonly default: string;
        };
        maxlength: {
            readonly type: import('vue').PropType<string | number> | null | undefined;
            readonly required?: false | undefined;
            readonly validator?: ((val: any) => boolean) | undefined;
            readonly default: unknown;
        };
        minlength: {
            readonly type: import('vue').PropType<string | number> | null | undefined;
            readonly required?: false | undefined;
            readonly validator?: ((val: any) => boolean) | undefined;
            readonly default: unknown;
        };
        showCount: {
            readonly type: import('vue').PropType<boolean> | null | undefined;
            readonly required?: false | undefined;
            readonly validator?: ((val: any) => boolean) | undefined;
            readonly default: boolean;
        };
    }>> & {
        onFocus?: ((e: FocusEvent) => any) | undefined;
        onBlur?: ((e: FocusEvent) => any) | undefined;
        onChange?: ((e: string) => any) | undefined;
        onInput?: ((e: string) => any) | undefined;
        onKeydown?: ((e: KeyboardEvent) => any) | undefined;
        "onUpdate:modelValue"?: ((val: string) => any) | undefined;
    }, {
        size: "large" | "small";
        type: "textarea" | "text" | "password";
        theme: "line" | "mask";
        disabled: boolean;
        placeholder: string;
        modelValue: string | number | null | undefined;
        clearable: boolean;
        readonly: boolean;
        autoComplete: any;
        maxlength: string | number;
        minlength: string | number;
        showCount: boolean;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        modelValue: {
            readonly type: import('vue').PropType<string | number | null | undefined> | null | undefined;
            readonly required?: false | undefined;
            readonly validator?: ((val: any) => boolean) | undefined;
            readonly default: unknown;
        };
        placeholder: {
            readonly type: import('vue').PropType<string> | null | undefined;
            readonly required?: false | undefined;
            readonly validator?: ((val: any) => boolean) | undefined;
            readonly default: string;
        };
        disabled: {
            readonly type: import('vue').PropType<boolean> | null | undefined;
            readonly required?: false | undefined;
            readonly validator?: ((val: any) => boolean) | undefined;
            readonly default: boolean;
        };
        clearable: {
            readonly type: import('vue').PropType<boolean> | null | undefined;
            readonly required?: false | undefined;
            readonly validator?: ((val: any) => boolean) | undefined;
            readonly default: boolean;
        };
        type: {
            readonly type: import('vue').PropType<"textarea" | "text" | "password"> | null | undefined;
            readonly required?: false | undefined;
            readonly validator?: ((val: any) => boolean) | undefined;
            readonly default: string;
        };
        readonly: {
            readonly type: import('vue').PropType<boolean> | null | undefined;
            readonly required?: false | undefined;
            readonly validator?: ((val: any) => boolean) | undefined;
            readonly default: boolean;
        };
        size: {
            readonly type: import('vue').PropType<"large" | "small"> | null | undefined;
            readonly required?: false | undefined;
            readonly validator?: ((val: any) => boolean) | undefined;
            readonly default: unknown;
        };
        theme: {
            readonly type: import('vue').PropType<"line" | "mask"> | null | undefined;
            readonly required?: false | undefined;
            readonly validator?: ((val: any) => boolean) | undefined;
            readonly default: unknown;
        };
        autoComplete: {
            readonly type: import('vue').PropType<any> | null | undefined;
            readonly required?: false | undefined;
            readonly validator?: ((val: any) => boolean) | undefined;
            readonly default: string;
        };
        maxlength: {
            readonly type: import('vue').PropType<string | number> | null | undefined;
            readonly required?: false | undefined;
            readonly validator?: ((val: any) => boolean) | undefined;
            readonly default: unknown;
        };
        minlength: {
            readonly type: import('vue').PropType<string | number> | null | undefined;
            readonly required?: false | undefined;
            readonly validator?: ((val: any) => boolean) | undefined;
            readonly default: unknown;
        };
        showCount: {
            readonly type: import('vue').PropType<boolean> | null | undefined;
            readonly required?: false | undefined;
            readonly validator?: ((val: any) => boolean) | undefined;
            readonly default: boolean;
        };
    }>> & {
        onFocus?: ((e: FocusEvent) => any) | undefined;
        onBlur?: ((e: FocusEvent) => any) | undefined;
        onChange?: ((e: string) => any) | undefined;
        onInput?: ((e: string) => any) | undefined;
        onKeydown?: ((e: KeyboardEvent) => any) | undefined;
        "onUpdate:modelValue"?: ((val: string) => any) | undefined;
    }, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
        size: "large" | "small";
        type: "textarea" | "text" | "password";
        theme: "line" | "mask";
        disabled: boolean;
        placeholder: string;
        modelValue: string | number | null | undefined;
        clearable: boolean;
        readonly: boolean;
        autoComplete: any;
        maxlength: string | number;
        minlength: string | number;
        showCount: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    modelValue: {
        readonly type: import('vue').PropType<string | number | null | undefined> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: unknown;
    };
    placeholder: {
        readonly type: import('vue').PropType<string> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: string;
    };
    disabled: {
        readonly type: import('vue').PropType<boolean> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: boolean;
    };
    clearable: {
        readonly type: import('vue').PropType<boolean> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: boolean;
    };
    type: {
        readonly type: import('vue').PropType<"textarea" | "text" | "password"> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: string;
    };
    readonly: {
        readonly type: import('vue').PropType<boolean> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: boolean;
    };
    size: {
        readonly type: import('vue').PropType<"large" | "small"> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: unknown;
    };
    theme: {
        readonly type: import('vue').PropType<"line" | "mask"> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: unknown;
    };
    autoComplete: {
        readonly type: import('vue').PropType<any> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: string;
    };
    maxlength: {
        readonly type: import('vue').PropType<string | number> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: unknown;
    };
    minlength: {
        readonly type: import('vue').PropType<string | number> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: unknown;
    };
    showCount: {
        readonly type: import('vue').PropType<boolean> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: boolean;
    };
}>> & {
    onFocus?: ((e: FocusEvent) => any) | undefined;
    onBlur?: ((e: FocusEvent) => any) | undefined;
    onChange?: ((e: string) => any) | undefined;
    onInput?: ((e: string) => any) | undefined;
    onKeydown?: ((e: KeyboardEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((val: string) => any) | undefined;
}, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    input: (e: string) => boolean;
    change: (e: string) => boolean;
    focus: (e: FocusEvent) => boolean;
    blur: (e: FocusEvent) => boolean;
    keydown: (e: KeyboardEvent) => boolean;
    "update:modelValue": (val: string) => boolean;
}, string, {
    size: "large" | "small";
    type: "textarea" | "text" | "password";
    theme: "line" | "mask";
    disabled: boolean;
    placeholder: string;
    modelValue: string | number | null | undefined;
    clearable: boolean;
    readonly: boolean;
    autoComplete: any;
    maxlength: string | number;
    minlength: string | number;
    showCount: boolean;
}, {}, string, {}> & (import('vue').VNodeProps & (import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & import('vue').Plugin));
export default RaInput;
export * from './src/input.ts';
export type RaInputInstance = buildInstance<typeof RaInput>;
