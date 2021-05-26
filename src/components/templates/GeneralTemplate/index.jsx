import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 40rem;
  margin: 20vh auto;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    margin: 10vh 1rem;
  }
`;

const GeneralTemplate = ({ children }) => {
  return <Container>{children}</Container>;
};

export default GeneralTemplate;
