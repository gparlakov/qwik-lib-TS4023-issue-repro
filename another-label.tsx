import { component$, QwikIntrinsicElements} from '@builder.io/qwik'

export type MyLabelProps = {
    test: string
};
export const MyLabel = component$((props: MyLabelProps) => {
    return <label {...props}>test</label>;
});
