import * as React from 'react';
import * as S from './style';
const Text = ({ children, fontSize = 1, className }) => (
  <S.Text fontSize={fontSize} className={className}>
    {children}
  </S.Text>
);

export default Text;
