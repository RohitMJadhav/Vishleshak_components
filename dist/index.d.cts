import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    text: string;
}
declare const Label: React.FC<LabelProps>;

interface InputBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
}
declare const InputBox: React.FC<InputBoxProps>;

export { InputBox, Label };
