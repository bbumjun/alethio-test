import styled from 'styled-components';

export const Wrapper = styled.div`
  min-width: 60vw;
  background-color: lightblue;
  border-radius: 10px;
  margin: 2rem 0;
  box-shadow: 0px 5px 5px lightgray;

  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    min-width: 90vw;
  }
`;
