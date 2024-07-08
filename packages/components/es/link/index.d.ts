export declare const RaLink: {
    new (...args: any[]): import('vue').CreateComponentPublicInstance<Readonly<import('vue').ExtractPropTypes<{
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
    }, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        click: (e: MouseEvent) => void;
    }, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
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
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
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
    }, {}, {}, {}, {}, {
        theme: string;
        disabled: boolean;
        icon: string | import('vue').Component | null;
        target: string;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
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
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (e: MouseEvent) => void;
}, string, {
    theme: string;
    disabled: boolean;
    icon: string | import('vue').Component | null;
    target: string;
}, {}, string, {}> & (import('vue').VNodeProps & (import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & ((new () => {
    $slots: {
        default?(_: {}): any;
    };
}) & import('vue').Plugin)));
export default RaLink;
export * from './src/link';
