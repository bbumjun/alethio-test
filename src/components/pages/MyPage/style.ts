import styled from 'styled-components';
import { Button, List } from 'components/atoms';
export const PageButton = styled(Button)`
  border-radius: 5px;
  margin: 0.5rem;
  ${(props: { highlight: boolean }) =>
    props.highlight &&
    `
      background-color: lightblue;
      color: white;
    `};
`;

export const ButtonList = styled(List)``;
