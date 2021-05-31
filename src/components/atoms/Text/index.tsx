import * as React from 'react';
import * as S from './style';

export interface TextProps {
  fontSize?: number;
  fontWeight?: string;
  className?: string;
  children: string | number;
}
const Text = ({
  children,
  fontSize = 1,
  fontWeight = 'normal',
  className = '',
}: TextProps) => (
  <S.Text fontSize={fontSize} fontWeight={fontWeight} className={className}>
    {children}
  </S.Text>
);

export default React.memo(Text);
