import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  margin: 10vh auto;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    margin: 10vh 1rem;
  }
`;

const GeneralTemplate = ({ children }) => {
  return <Container>{children}</Container>;
};

export default GeneralTemplate;
