import React from 'react';
import * as S from './style';
const Button = ({ onClick, type, children, className }) => {
  return (
    <S.Button type={type} onClick={onClick} className={className}>
      {children}
    </S.Button>
  );
};

export default Button;
