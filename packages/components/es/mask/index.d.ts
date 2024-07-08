import { buildInstance } from '@capybara-plus/utils';

export declare const RaMask: {
    new (...args: any[]): import('vue').CreateComponentPublicInstance<Readonly<import('vue').ExtractPropTypes<{
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
        open: () => void;
        close: () => void;
    }, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        click: (e: MouseEvent) => void;
        "update:visibility": (e: boolean) => void;
    }, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
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
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
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
        open: () => void;
        close: () => void;
    }, {}, {}, {}, {
        show: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
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
    open: () => void;
    close: () => void;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (e: MouseEvent) => void;
    "update:visibility": (e: boolean) => void;
}, string, {
    show: boolean;
}, {}, string, {}> & (import('vue').VNodeProps & (import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & ((new () => {
    $slots: {
        default?(_: {}): any;
    };
}) & import('vue').Plugin)));
export default RaMask;
export type RaMaskInstance = buildInstance<typeof RaMask>;
export * from './src/mask.ts';
