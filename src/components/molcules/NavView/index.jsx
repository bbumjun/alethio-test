import React from 'react';
import * as S from './style';
import closeImg from 'images/close_black_24dp.svg';
const NavView = ({ handleClick }) => {
  return (
    <S.Wrapper>
      <S.CloseButton handleClick={handleClick}>
        <S.CloseIcon src={closeImg} />
      </S.CloseButton>
      <S.ListWrapper>
        <S.VerticalNavList handleClick={handleClick} />
      </S.ListWrapper>
    </S.Wrapper>
  );
};
export default NavView;
