import React, { ChangeEventHandler, InputHTMLAttributes } from 'react';
import * as S from './style';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  type: string;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
}
const Input = ({ type, className, ...rest }: InputProps) => {
  return <S.Input type={type} className={className} {...rest} />;
};

export default React.memo(Input);
