import { ReactElement } from 'react';
import * as S from './style';

const NavBar = (): ReactElement => {
  return (
    <S.Wrapper>
      <S.HorizontalNavList />
    </S.Wrapper>
  );
};

export default NavBar;
