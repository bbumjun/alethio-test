import React from 'react';
import * as S from './style';
import { NavItem } from 'components/molcules';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import auth from 'recoil/auth';
import { message } from 'common/config';
const NavList = ({ className, onClick }) => {
  const authenticated = useRecoilValue(auth.authenticatedState);
  const setToken = useSetRecoilState(auth.tokenState);
  const logout = () => {
    setToken(null);
    alert(message.success.LOGOUT);
  };
  return (
    <S.NavList className={className} onClick={onClick}>
      {authenticated ? (
        <>
          <NavItem url="/mypage/order">마이페이지</NavItem>
          <NavItem url="/logout" onClick={logout}>
            로그아웃
          </NavItem>
        </>
      ) : (
        <>
          <NavItem url="/sign-up">회원가입</NavItem>
          <NavItem url="/login">로그인</NavItem>
        </>
      )}
    </S.NavList>
  );
};
export default NavList;
