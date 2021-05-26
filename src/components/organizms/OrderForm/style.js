import styled from 'styled-components';
import { Image } from 'components/atoms';
export const ImageWrapper = styled.div`
  width: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    width: 80%;
  }
`;
export const StyledImage = styled(Image)`
  padding: 1rem;
`;
