import { ExtractPropTypes } from 'vue';

export declare const iconProps: {
    readonly size: {
        readonly type: import('vue').PropType<string | number> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: "1em";
    };
    readonly color: {
        readonly type: import('vue').PropType<string> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: "inherit";
    };
};
export declare const iconEmits: {
    click: (e: MouseEvent) => boolean;
};
export type IconProps = ExtractPropTypes<typeof iconProps>;
export type IconEmits = ExtractPropTypes<typeof iconEmits>;
