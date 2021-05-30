import { Input, Label } from 'components/atoms';
import styled from 'styled-components';
export const Content = styled.div`
  padding: 0.5rem 0;
`;
export const StyledLabel = styled(Label)``;
export const StyledInput = styled(Input)`
  width: 20rem;
  font-size: 1rem;
  border-radius: 5px;
  padding: 0.5rem 0.1rem;
  border-color: ${(props: { isValid: boolean }) =>
    props.isValid === false ? 'red' : 'inherit'};
`;
