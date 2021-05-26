import React from 'react';
import useValidateInput from 'hooks/useValidateInput';
import * as S from './style';
import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import auth from 'recoil/auth';
import { message } from 'common/config';
import axios from 'axios';
const SignUpForm = () => {
  const [email, emailValidator] = useValidateInput(message.confirm.EMAIL);
  const [password, passwordValidator] = useValidateInput(
    message.confirm.PASSWORD,
  );
  const [passwordAgain, passwordAgainValidator] = useValidateInput(
    message.confirm.PASSWORD,
  );
  const [mobile, mobileValidator] = useValidateInput(message.confirm.MOBILE);
  const setToken = useSetRecoilState(auth.tokenState);
  const history = useHistory();
  const redirectToHome = () => history.push('/');
  const signUp = async () => {
    try {
      const res = await axios.post('/sign-up', {
        email,
        password,
        mobile,
      });
      setToken(res.data.token);
      alert(message.success.SIGNUP);
      redirectToHome();
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
      alert(message.error.DIFFERENT_PASSWORD);
      return;
    }
    signUp();
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Header>회원가입</S.Header>
      <S.StyledFormInput
        label="이메일"
        name="email"
        type="email"
        required={true}
        value={email}
        validator={emailValidator}
        placeholder={message.type.EMAIL}
      />
      <S.StyledFormInput
        label="비밀번호"
        name="password"
        type="password"
        value={password}
        validator={passwordValidator}
        required={true}
        placeholder={message.type.PASSWORD}
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
        placeholder={message.type.PASSWORD_AGAIN}
        validation={{
          minLength: 8,
          maxLength: 15,
        }}
      />
      <S.StyledFormInput
        label="전화번호"
        name="mobile"
        type="text"
        value={mobile}
        validator={mobileValidator}
        required={true}
        placeholder={message.type.MOBILE}
        validation={{
          minLength: 11,
          maxLength: 11,
          pattern: '[0-9]+',
        }}
      />
      <S.SubmitButton type="submit">회원가입</S.SubmitButton>
    </S.Form>
  );
};

export default SignUpForm;
