import React from 'react';
import { Image } from 'components/atoms';
import logo from 'images/logo.png';
import * as S from './style';

const Logo = () => (
  <S.Logo to="/">
    <Image src={logo}></Image>
  </S.Logo>
);

export default Logo;
