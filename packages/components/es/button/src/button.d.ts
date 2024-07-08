import { ExtractPropTypes } from 'vue';

export declare const buttonProps: {
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
};
export declare const buttonEmits: {
    click: (e: MouseEvent) => boolean;
};
export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
export type ButtonEmits = typeof buttonEmits;
