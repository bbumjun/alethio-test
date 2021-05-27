import styled from 'styled-components';
import { ListItem, Text } from 'components/atoms';
export const StyledItem = styled(ListItem)`
  display: flex;
  border: 0.1rem black solid;
  margin: 1rem;
  padding: 1rem;
  background-color: white;
  &:hover {
    background-color: lightskyblue;
  }
`;

export const ID = styled(Text)`
  flex: 1 3 10rem;
  border-right: 0.1rem black solid;
  padding: 1rem;
  text-align: center;
`;
export const Name = styled(Text)`
  padding: 1rem;
  flex: 5 1 10rem;
  text-align: center;
`;
