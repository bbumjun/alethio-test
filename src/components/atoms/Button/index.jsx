import React from 'react';
import * as S from './style';
const Button = ({ handleClick, children, className }) => {
  return (
    <S.Button onClick={handleClick} className={className}>
      {children}
    </S.Button>
  );
};

export default Button;
