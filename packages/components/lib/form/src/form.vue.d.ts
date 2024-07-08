declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    model: {
        readonly type: import('vue').PropType<any> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: () => void;
    };
    rules: {
        readonly type: import('vue').PropType<void | import('./form').FormRules> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: () => void;
    };
}, {
    reset: () => void;
    validate: () => Promise<void>;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    model: {
        readonly type: import('vue').PropType<any> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: () => void;
    };
    rules: {
        readonly type: import('vue').PropType<void | import('./form').FormRules> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: () => void;
    };
}>>, {
    model: any;
    rules: void | import('./form').FormRules;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
