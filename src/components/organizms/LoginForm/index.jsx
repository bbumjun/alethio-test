import React from 'react';
import { message } from 'common/config';
import * as S from './style';
import useInput from 'hooks/useInput';
import { useSetRecoilState } from 'recoil';
import auth from 'recoil/auth';
import { useHistory } from 'react-router';
import axios from 'axios';
const LoginForm = () => {
  const [email, handleEmailChange] = useInput();
  const [password, handlePaasswordChange] = useInput();
  const setToken = useSetRecoilState(auth.tokenState);
  const history = useHistory();

  const redirectToHome = () => history.push('/');
  const login = async () => {
    try {
      const res = await axios.post('/login', {
        email,
        password,
      });

      setToken(res.data.token);
      alert(message.success.LOGIN);
      redirectToHome();
    } catch (error) {
      if (error.response) {
        alert(message.confirm.message.PASSWORD);
      } else {
        alert(message.failure.LOGIN);
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };
  return (
    <S.Form>
      <S.Header>로그인</S.Header>
      <S.StyledInput
        label="이메일"
        name="email"
        type="email"
        required
        value={email}
        onChange={handleEmailChange}
        placeholder={message.type.EMAIL}
      />
      <S.StyledInput
        label="비밀번호"
        name="password"
        type="password"
        required
        value={password}
        onChange={handlePaasswordChange}
        placeholder={message.type.PASSWORD}
      />
      <S.SubmitButton onSubmit={handleSubmit}>로그인</S.SubmitButton>
    </S.Form>
  );
};

export default LoginForm;
