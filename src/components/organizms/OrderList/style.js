import styled from 'styled-components';
import { List } from 'components/atoms';
export const StyledList = styled(List)`
  min-width: 60vw;
  background-color: lightblue;
  border-radius: 10px;
  margin: 2rem 0;
  box-shadow: 5px 5px 5px lightgray;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    min-width: 90vw;
  }
`;
