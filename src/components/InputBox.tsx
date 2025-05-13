import React from 'react';

interface InputBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const InputBox: React.FC<InputBoxProps> = (props) => {
  return <input {...props} />;
};