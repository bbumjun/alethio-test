import React from 'react';
import * as S from './style';
import { Text } from 'components/atoms';

const NavItem = ({ url, onClick, children }) => {
  const activeStyle = {
    backgroundColor: 'lightblue',
    fontWeight: 'bold',
    color: 'white',
  };
  return (
    <S.StyledLink to={url} activeStyle={activeStyle} onClick={onClick}>
      <Text>{children}</Text>
    </S.StyledLink>
  );
};

export default NavItem;
