import styled from 'styled-components';
import { Image } from 'components/atoms';
export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
  }
`;
export const StyledImage = styled(Image)``;
