import React from 'react';
import * as S from './style';
const Button = ({ onClick, type = 'button', children, className, id }) => {
  return (
    <S.Button type={type} onClick={onClick} className={className} id={id}>
      {children}
    </S.Button>
  );
};

export default Button;
