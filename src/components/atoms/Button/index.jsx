import React from 'react';
import * as S from './style';
const Button = ({ handleClick, type, children, className }) => {
  return (
    <S.Button type={type} onClick={handleClick} className={className}>
      {children}
    </S.Button>
  );
};

export default Button;
