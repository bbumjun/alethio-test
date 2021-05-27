import * as React from 'react';
import * as S from './style';
const Text = ({ children, fontSize = 1, fontWeight, className }) => (
  <S.Text fontSize={fontSize} fontWeight={fontWeight} className={className}>
    {children}
  </S.Text>
);

export default Text;
