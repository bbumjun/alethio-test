import React, {
  ButtonHTMLAttributes,
  MouseEventHandler,
  ReactElement,
} from 'react';
import * as S from './style';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  id?: string;
  onClick?: MouseEventHandler;
  type?: 'button' | 'submit' | 'reset';
  children: ReactElement | string | number;
}
const Button = ({
  onClick,
  type = 'button',
  children,
  className,
  ...rest
}: ButtonProps): ReactElement => {
  return (
    <S.Button type={type} onClick={onClick} className={className} {...rest}>
      {children}
    </S.Button>
  );
};

export default React.memo(Button);
