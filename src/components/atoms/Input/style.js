import styled from 'styled-components';

export const Input = styled.input`
  border-color: ${(props) => (props.valid ? 'inherit' : 'red')};
`;
