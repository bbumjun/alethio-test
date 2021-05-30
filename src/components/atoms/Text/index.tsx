import * as React from 'react';
import * as S from './style';

export interface TextProps {
  fontSize?: number;
  fontWeight?: string;
  className?: string;
  children: string;
}
const Text: React.FC<TextProps> = ({
  children,
  fontSize = 1,
  fontWeight = 'normal',
  className = '',
}) => (
  <S.Text fontSize={fontSize} fontWeight={fontWeight} className={className}>
    {children}
  </S.Text>
);

export default React.memo(Text);
