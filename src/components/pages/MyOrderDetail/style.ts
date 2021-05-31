import styled from 'styled-components';
import { Button } from 'components/atoms';
export const Wrapper = styled.div`
  position: relative;
  min-width: 60vw;
  background-color: lightblue;
  border-radius: 10px;
  margin: 2rem 0;
  box-shadow: 0px 5px 5px lightgray;

  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    min-width: 90vw;
  }
`;

export const BackButton = styled(Button)`
  position: absolute;
  border-radius: 100%;
  top: -50%;
  left: 0;
`;
