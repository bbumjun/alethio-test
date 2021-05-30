import styled from 'styled-components';

export const Text = styled.p`
  font-size: ${(props) => `${props.fontSize}rem`};
  font-weight: ${(props) => props.fontWeight};
`;
