import { ExtractPropTypes } from 'vue';

export declare const maskProps: {
    show: {
        readonly type: import('vue').PropType<boolean> | null | undefined;
        readonly required?: false | undefined;
        readonly validator?: ((val: any) => boolean) | undefined;
        readonly default: boolean;
    };
};
export declare const maskEmits: {
    click: (e: MouseEvent) => boolean;
    "update:visibility": (e: boolean) => boolean;
};
export type MaskProps = ExtractPropTypes<typeof maskProps>;
export type MaskEmits = ExtractPropTypes<typeof maskEmits>;
