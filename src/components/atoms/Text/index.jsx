import * as React from 'react';
import * as S from './style';
const Text = ({ children, fontSize = 1 }) => (
  <S.Text fontSize={fontSize}>{children}</S.Text>
);

export default Text;
