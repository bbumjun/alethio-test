import styled from 'styled-components';
interface TextProps {
  fontSize: number;
  fontWeight: string;
}
export const Text = styled.p`
  font-size: ${(props: TextProps) => `${props.fontSize}rem`};
  font-weight: ${(props: TextProps) => props.fontWeight};
`;
