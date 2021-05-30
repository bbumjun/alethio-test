import React from 'react';
import * as S from './style';
import closeImg from 'images/close_black_24dp.svg';
import { Portal } from 'components/atoms';
const NavView = ({ onClick }) => {
  return (
    <Portal>
      <S.Wrapper>
        <S.CloseButton onClick={onClick}>
          <S.CloseIcon src={closeImg} />
        </S.CloseButton>
        <S.ListWrapper>
          <S.VerticalNavList onClick={onClick} />
        </S.ListWrapper>
      </S.Wrapper>
    </Portal>
  );
};
export default NavView;
