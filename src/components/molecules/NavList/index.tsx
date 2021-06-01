import * as S from './style';
import { NavItem } from 'components/molecules';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import auth from 'recoil/auth';
import { messages } from 'common/constants';
import { MouseEventHandler, ReactElement } from 'react';
export interface NavListProps {
  className?: string;
  onClick?: MouseEventHandler;
}
const NavList = ({ className, onClick }: NavListProps): ReactElement => {
  const authenticated = useRecoilValue(auth.authenticatedState);
  const setToken = useSetRecoilState(auth.tokenState);
  const handleLogoutClick = () => {
    setToken(null);
    alert(messages.LOGOUT.SUCCESS);
  };
  return (
    <S.NavList className={className} onClick={onClick}>
      {authenticated ? (
        <>
          <NavItem url="/mypage/order">마이페이지</NavItem>
          <NavItem url="/logout" onClick={handleLogoutClick}>
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
