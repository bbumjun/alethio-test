import styled from 'styled-components';

export const Text = styled.div`
  font-size: ${(props) => `${props.fontSize}rem`};
  font-weight: ${(props) => props.fontWeight};
`;
