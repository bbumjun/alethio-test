import React from 'react';
import { Image } from 'components/atoms';
import logo from 'images/logo.png';
import * as S from './style';

const Logo = () => (
  <S.StyledLink to="/">
    <Image src={logo} />
  </S.StyledLink>
);

export default React.memo(Logo);
