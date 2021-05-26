import styled from 'styled-components';

export const Container = styled.section`
  /* max-width: ${(props) => props.theme.screen.medium}; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 40rem;
  margin: 15rem auto;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    margin: 10rem 1rem;
  }
`;
