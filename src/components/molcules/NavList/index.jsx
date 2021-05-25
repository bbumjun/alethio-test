import React from 'react';
import * as S from './style';
import { NavItem } from 'components/molcules';
const NavList = ({ className }) => {
  return (
    <S.NavList className={className}>
      <NavItem url="/sign-up">회원가입</NavItem>
      <NavItem url="/login">로그인</NavItem>
      <NavItem url="/mypage-order">마이페이지</NavItem>
    </S.NavList>
  );
};
export default NavList;
