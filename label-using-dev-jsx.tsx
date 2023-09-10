import { component$, QwikIntrinsicElements} from '@builder.io/qwik'

export type MyLabelProps<T> = QwikIntrinsicElements['label'] & {
    v?: T;
};

export type Option = {
    label: string;
}
export const MyLabel = component$(<O extends Option = Option>(props: MyLabelProps<O>) => {
    return <label {...props}>test</label>;
});
