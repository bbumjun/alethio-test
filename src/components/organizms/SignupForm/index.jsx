import React from 'react';
import useFormInput from 'hooks/useFormInput';
import * as S from './style';
const SignUpForm = () => {
  const [email, emailValidator] = useFormInput('이메일 확인');
  const [pw, pwValidator] = useFormInput('비밀번호 확인');
  const [pwAgain, pwAgainValidator] = useFormInput('비밀번호 확인');
  const [phoneNumber, phoneNunmberValidator] = useFormInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pw !== pwAgain) {
      alert('비밀번호가 일치하지 않습니다');
      return;
    }
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Header>회원가입</S.Header>
      <S.StyledFormInput
        label="E-mail"
        name="email"
        type="email"
        required={true}
        value={email}
        validator={emailValidator}
        placeholder="이메일을 입력하세요."
      />
      <S.StyledFormInput
        label="비밀번호"
        name="password"
        type="password"
        value={pw}
        validator={pwValidator}
        required={true}
        placeholder="비밀번호를 입력하세요."
        validation={{
          minLength: 8,
          maxLength: 15,
        }}
      />
      <S.StyledFormInput
        label="비밀번호 확인"
        name="passwordConfirm"
        type="password"
        value={pwAgain}
        validator={pwAgainValidator}
        required={true}
        placeholder="비밀번호를 입력하세요."
        validation={{
          minLength: 8,
          maxLength: 15,
        }}
      />
      <S.StyledFormInput
        label="연락처"
        name="phoneNumber"
        type="text"
        value={phoneNumber}
        validator={phoneNunmberValidator}
        required={true}
        placeholder="연락처를 입력하세요."
        validation={{
          pattern: '[0-9]+',
        }}
      />
      <S.SubmitButton type="submit" onSubmit={handleSubmit}>
        회원가입
      </S.SubmitButton>
    </S.Form>
  );
};

export default SignUpForm;
