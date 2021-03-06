import React, { MouseEventHandler, ReactElement } from 'react';
import * as S from './style';

export interface NavItemProps {
  url: string;
  onClick?: MouseEventHandler;
  children: ReactElement | ReactElement[] | string;
}
const NavItem = ({ url, onClick, children }: NavItemProps): ReactElement => {
  const activeStyle = {
    backgroundColor: 'lightblue',
    color: 'white',
    boxShadow: '0px 5px 5px lightgray',
  };
  return (
    <S.StyledLink to={url} activeStyle={activeStyle} onClick={onClick}>
      {children}
    </S.StyledLink>
  );
};

export default NavItem;
