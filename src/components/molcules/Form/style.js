import { Button } from 'components/atoms';
import styled from 'styled-components';

export const Form = styled.form`
  min-width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightblue;
  box-shadow: 5px 5px 5px lightgray;
  padding: 1rem;
  border-radius: 10px;
  @media screen and (max-width: ${(props) => props.theme.screen.medium}) {
    min-width: 60vw;
  }
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    min-width: 80vw;
  }
`;
export const Header = styled.h1``;

export const SubmitButton = styled(Button)`
  margin: 1rem 0;
  border: solid black 0.1rem;
  border-radius: 5px;
  transition: all 0.5s ease;

  &:hover {
    background-color: white;
  }
`;
