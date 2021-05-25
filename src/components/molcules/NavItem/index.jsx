import React from 'react';
import * as S from './style';
import { Text } from 'components/atoms';

const NavItem = ({ url, children }) => {
  const activeStyle = {
    color: 'red',
    fontWeight: 'bold',
  };
  return (
    <S.StyledLink to={url} activeStyle={activeStyle}>
      <Text>{children}</Text>
    </S.StyledLink>
  );
};

export default NavItem;
