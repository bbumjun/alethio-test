import React, { ButtonHTMLAttributes, MouseEventHandler } from 'react';
import * as S from './style';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: MouseEventHandler;
  className?: string;
}
const Button: React.FC<ButtonProps> = ({
  onClick,
  type = 'button',
  children,
  className,
}) => {
  return (
    <S.Button type={type} onClick={onClick} className={className}>
      {children}
    </S.Button>
  );
};

export default React.memo(Button);
