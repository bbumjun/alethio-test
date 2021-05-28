import React from 'react';
import * as S from './style';
const Form = ({ children, title, submitName, onSubmit }) => {
  return (
    <S.FormContent onSubmit={onSubmit}>
      <S.Header>{title}</S.Header>
      {children}
      <S.SubmitButton type="submit">{submitName}</S.SubmitButton>
    </S.FormContent>
  );
};
export default React.memo(Form);
