import styled from 'styled-components';
import NavList from 'components/molecules/NavList';
export const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    display: none;
  }
`;

export const HorizontalNavList = styled(NavList)`
  display: flex;
  justify-content: space-between;
`;
