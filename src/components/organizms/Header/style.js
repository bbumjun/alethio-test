import styled from 'styled-components';
import { Button, Image } from 'components/atoms';
export const Header = styled.header`
  max-width: ${(props) => props.theme.screen.medium};
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: ${(props) => props.theme.screen.medium}) {
    margin: 0 1rem;
  }
`;
export const ButtonWrapper = styled.div`
  display: none;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    display: block;
  }
`;
export const MenuButton = styled(Button)``;

export const MenuImage = styled(Image)`
  width: 2rem;
`;
