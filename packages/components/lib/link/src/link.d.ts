import { ExtractPropTypes } from 'vue';

export declare const linkProps: {
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
};
export declare const linkEmits: {
    click: (e: MouseEvent) => boolean;
};
export type LinkProps = ExtractPropTypes<typeof linkProps>;
export type LinkEmits = ExtractPropTypes<typeof linkEmits>;
