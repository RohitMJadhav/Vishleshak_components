import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    text: string;
}
declare const Label: React.FC<LabelProps>;

type InputProps = {
    label?: string;
    name: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
};
declare const InputBox: React.FC<InputProps>;

export { InputBox, Label };
