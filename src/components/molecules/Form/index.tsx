import React, { FormEventHandler, ReactElement } from 'react';
import * as S from './style';
export interface FormProps {
  title: string;
  submitName: string;
  onSubmit: FormEventHandler;
  children: ReactElement | ReactElement[];
}
const Form = ({ children, title, submitName, onSubmit }: FormProps) => {
  return (
    <S.FormContent onSubmit={onSubmit}>
      <S.Header>{title}</S.Header>
      {children}
      <S.SubmitButton type="submit">{submitName}</S.SubmitButton>
    </S.FormContent>
  );
};
export default React.memo(Form);
