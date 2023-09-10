import { component$, QwikIntrinsicElements} from '@builder.io/qwik'

export type MyLabelProps = QwikIntrinsicElements['label'];
export const MyLabel = component$((props: MyLabelProps) => {
    return <label {...props}>test</label>;
});
