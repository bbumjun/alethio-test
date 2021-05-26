import { FormInput } from 'components/molcules';
import { Button } from 'components/atoms';
import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
`;
export const Header = styled.h1``;
export const StyledInput = styled(FormInput)``;

export const SubmitButton = styled(Button)`
  margin: 1rem 0;
  border: solid black 0.1rem;
  border-radius: 5px;
`;
