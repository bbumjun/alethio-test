import { ReactElement } from 'react';
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
interface TemplateProps {
  children: ReactElement | ReactElement[];
}
const GeneralTemplate = ({ children }: TemplateProps) => {
  return <Container>{children}</Container>;
};

export default GeneralTemplate;
