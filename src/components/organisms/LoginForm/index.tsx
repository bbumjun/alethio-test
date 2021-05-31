import { message } from 'common/constants';
import useFormInput from 'hooks/useFormInput';
import auth from 'recoil/auth';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { useHistory } from 'react-router';
import { Form, FormInput } from 'components/molecules';
import { FormEvent } from 'react';
const LoginForm = () => {
  const { value: email, onChange: handleEmailChange } = useFormInput();
  const { value: password, onChange: handlePasswordChange } = useFormInput();
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
      redirectToHome();
    } catch (error) {
      if (error.response) {
        alert(message.confirm.PASSWORD);
      } else {
        alert(message.failure.LOGIN);
      }
    }
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login();
  };
  return (
    <Form title="로그인" submitName="로그인" onSubmit={handleSubmit}>
      <FormInput
        label="이메일"
        name="email"
        type="email"
        required
        value={email}
        onChange={handleEmailChange}
        placeholder={message.type.EMAIL}
      />
      <FormInput
        label="비밀번호"
        name="password"
        type="password"
        required
        value={password}
        onChange={handlePasswordChange}
        placeholder={message.type.PASSWORD}
      />
    </Form>
  );
};

export default LoginForm;
