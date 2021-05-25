import React from 'react';
import * as S from './style';
const Button = ({ handleClick, children }) => {
  return <S.Button onClick={handleClick}>{children}</S.Button>;
};

export default Button;
