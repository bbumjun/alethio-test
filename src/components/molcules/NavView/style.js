import styled from 'styled-components';
import { NavList } from 'components/molcules';
import { Button, Image } from 'components/atoms';
export const Wrapper = styled.div`
  position: fixed;
  background-color: white;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
export const ListWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const VerticalNavList = styled(NavList)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled(Button)`
  position: absolute;
  right: 1rem;
  top: 0;
`;
export const CloseIcon = styled(Image)`
  width: 2rem;
`;
