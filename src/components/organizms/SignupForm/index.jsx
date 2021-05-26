import React from 'react';
import useFormInput from 'hooks/useFormInput';
import * as S from './style';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import auth from 'recoil/auth';
import { message } from 'common/config';
const SignUpForm = () => {
  const [email, emailValidator] = useFormInput('이메일 확인');
  const [password, passwordValidator] = useFormInput('비밀번호 확인');
  const [passwordAgain, passwordAgainValidator] = useFormInput('비밀번호 확인');
  const [mobile, mobileValidator] = useFormInput('');
  const setToken = useSetRecoilState(auth.tokenState);
  const history = useHistory();
  const signUp = async () => {
    try {
      const res = await axios.post('/sign-up', {
        email,
        password,
        mobile,
      });
      if (!res.data?.token) {
        alert(message.error.ERROR_OCCURED);
        return;
      }
      setToken(res.data.token);
      alert(message.success.SIGNUP);
      history.push('/');
    } catch (error) {
      if (error.response) {
        alert(message.error.ERROR_BY_CLIENT);
      } else if (error.request) {
        alert(message.error.ERROR_BY_SERVER);
      } else {
        alert(message.error.ERROR_OCCURED);
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordAgain) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    signUp();
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
        value={password}
        validator={passwordValidator}
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
        value={passwordAgain}
        validator={passwordAgainValidator}
        required={true}
        placeholder="비밀번호를 입력하세요."
        validation={{
          minLength: 8,
          maxLength: 15,
        }}
      />
      <S.StyledFormInput
        label="연락처"
        name="mobile"
        type="text"
        value={mobile}
        validator={mobileValidator}
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
