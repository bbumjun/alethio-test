import React, { useState } from 'react';
import { Logo, NavBar, NavView } from 'components/molcules';
import * as S from './style';
import menuImg from 'images/menu_black_24dp.svg';
const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const openMenu = () => {
    setToggleMenu(true);
  };
  const closeMenu = () => {
    setToggleMenu(false);
  };
  return (
    <S.Header>
      <Logo />
      <NavBar />
      <S.ButtonWrapper>
        <S.MenuButton handleClick={openMenu}>
          <S.MenuImage src={menuImg} alt="menu" />
        </S.MenuButton>
      </S.ButtonWrapper>
      {toggleMenu && <NavView handleClick={closeMenu} />}
    </S.Header>
  );
};

export default Header;
