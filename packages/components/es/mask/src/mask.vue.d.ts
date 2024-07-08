declare function open(): void;
declare function close(): void;
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    show: {
        readonly type: import('vue').PropType<boolean> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: boolean;
    };
}, {
    open: typeof open;
    close: typeof close;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (e: MouseEvent) => void;
    "update:visibility": (e: boolean) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    show: {
        readonly type: import('vue').PropType<boolean> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: boolean;
    };
}>> & {
    onClick?: ((e: MouseEvent) => any) | undefined;
    "onUpdate:visibility"?: ((e: boolean) => any) | undefined;
}, {
    show: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
