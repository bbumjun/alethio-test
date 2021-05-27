import styled from 'styled-components';
import { ListItem } from 'components/atoms';
export const StyledItem = styled(ListItem)`
  display: flex;
  border: 0.1rem lightgray solid;
  border-radius: 10px;
  margin: 1rem;
  background-color: white;
  transition: all 0.5s ease;

  &:hover {
    background-color: lightskyblue;
    border-color: black;
  }
`;

export const ID = styled.div`
  flex: 1 1 10rem;
  border-right: 0.1rem lightgray solid;
  padding: 1rem;
  text-align: center;
`;
export const Name = styled.div`
  padding: 1rem;
  flex: 5 1 20rem;
  text-align: center;
`;
