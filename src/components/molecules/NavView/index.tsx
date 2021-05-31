import React, { MouseEventHandler, ReactElement } from 'react';
import * as S from './style';
import closeImg from 'images/close_black_24dp.svg';
import { Portal } from 'components/atoms';
export interface NavViewProps {
  onClick: MouseEventHandler;
}
const NavView = ({ onClick }: NavViewProps): ReactElement => {
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
