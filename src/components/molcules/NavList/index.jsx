import React from 'react';
import * as S from './style';
import { NavItem } from 'components/molcules';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import auth from 'recoil/auth';
import { message } from 'common/config';
import { useHistory } from 'react-router-dom';
const NavList = ({ className, handleClick }) => {
  const authenticated = useRecoilValue(auth.authenticatedState);
  const setToken = useSetRecoilState(auth.tokenState);
  const history = useHistory();
  const logout = () => {
    setToken(null);
    alert(message.success.LOGOUT);
    history.push('/');
  };
  return (
    <S.NavList className={className} onClick={handleClick}>
      {authenticated ? (
        <>
          <NavItem url="/mypage-order">마이페이지</NavItem>
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
