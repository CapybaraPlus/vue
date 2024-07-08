
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    readonly theme: {
        readonly type: import('vue').PropType<string> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: "default";
    };
    readonly disabled: BooleanConstructor;
    readonly size: {
        readonly type: import('vue').PropType<string> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: "normal";
    };
    readonly shape: {
        readonly type: import('vue').PropType<string> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: "default";
    };
    readonly block: BooleanConstructor;
    readonly type: {
        readonly type: import('vue').PropType<"button" | "submit" | "reset" | undefined> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: "button";
    };
    readonly color: StringConstructor;
    readonly loading: BooleanConstructor;
    readonly hoverAnimation: {
        readonly type: import('vue').PropType<string> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: "default";
    };
    readonly activeAnimation: {
        readonly type: import('vue').PropType<string> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: "default";
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (e: MouseEvent) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    readonly theme: {
        readonly type: import('vue').PropType<string> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: "default";
    };
    readonly disabled: BooleanConstructor;
    readonly size: {
        readonly type: import('vue').PropType<string> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: "normal";
    };
    readonly shape: {
        readonly type: import('vue').PropType<string> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: "default";
    };
    readonly block: BooleanConstructor;
    readonly type: {
        readonly type: import('vue').PropType<"button" | "submit" | "reset" | undefined> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: "button";
    };
    readonly color: StringConstructor;
    readonly loading: BooleanConstructor;
    readonly hoverAnimation: {
        readonly type: import('vue').PropType<string> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: "default";
    };
    readonly activeAnimation: {
        readonly type: import('vue').PropType<string> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: "default";
    };
}>> & {
    onClick?: ((e: MouseEvent) => any) | undefined;
}, {
    readonly size: string;
    readonly type: "button" | "submit" | "reset" | undefined;
    readonly theme: string;
    readonly shape: string;
    readonly hoverAnimation: string;
    readonly activeAnimation: string;
    readonly disabled: boolean;
    readonly block: boolean;
    readonly loading: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
