
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    theme: {
        readonly type: import('vue').PropType<string> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: string;
    };
    disabled: BooleanConstructor;
    target: {
        readonly type: import('vue').PropType<string> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: string;
    };
    href: StringConstructor;
    icon: {
        readonly type: import('vue').PropType<string | import('vue').Component | null> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: unknown;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (e: MouseEvent) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    theme: {
        readonly type: import('vue').PropType<string> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: string;
    };
    disabled: BooleanConstructor;
    target: {
        readonly type: import('vue').PropType<string> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: string;
    };
    href: StringConstructor;
    icon: {
        readonly type: import('vue').PropType<string | import('vue').Component | null> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: unknown;
    };
}>> & {
    onClick?: ((e: MouseEvent) => any) | undefined;
}, {
    theme: string;
    disabled: boolean;
    icon: string | import('vue').Component | null;
    target: string;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
