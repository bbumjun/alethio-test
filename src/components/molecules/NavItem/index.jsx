import React from 'react';
import * as S from './style';

const NavItem = ({ url, onClick, children }) => {
  const activeStyle = {
    backgroundColor: 'lightblue',
    fontWeight: 'bold',
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
