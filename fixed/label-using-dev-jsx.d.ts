import { QwikIntrinsicElements } from '@builder.io/qwik';
export type MyLabelProps<T> = QwikIntrinsicElements['label'] & {
    v?: T;
};
export type Option = {
    label: string;
};
export declare const MyLabel: <O extends Option = Option>(props: import("@builder.io/qwik").PublicProps<MyLabelProps<O>>, key: string | null, flags: number, dev?: import("@builder.io/qwik").DevJSX | undefined) => import("@builder.io/qwik").JSXNode<string | import("@builder.io/qwik").FunctionComponent<Record<string, any>>> | null;
