import React from 'react';
import * as S from './style';
const Form = ({ children, title, submitName, onSubmit }) => {
  return (
    <S.Form onSubmit={onSubmit}>
      <S.Header>{title}</S.Header>
      {children}
      <S.SubmitButton type="submit">{submitName}</S.SubmitButton>
    </S.Form>
  );
};
export default React.memo(Form);
