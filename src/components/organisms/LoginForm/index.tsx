import { messages } from 'common/constants';
import useFormInput from 'hooks/useFormInput';
import auth from 'recoil/auth';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { useHistory } from 'react-router';
import { Form, FormInput } from 'components/molecules';
import { FormEvent, ReactElement } from 'react';
const LoginForm = (): ReactElement => {
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
      switch (error) {
        case 400:
          alert(messages.ERROR.BAD_REQUEST);
          break;
        case 401:
          alert(messages.ERROR.UNAUTHORIZED);
          break;
        case 403:
          alert(messages.ERROR.FORBIDDEN);
          break;
        case 404:
          alert(messages.ERROR.NOT_FOUND);
          break;
        case 500:
          alert(messages.ERROR.INTERNAL_SERVER_ERROR);
          break;
        default:
          alert(messages.ERROR.SOMETHING_WRONG);
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
        placeholder={messages.EMAIL.HINT}
      />
      <FormInput
        label="비밀번호"
        name="password"
        type="password"
        required
        value={password}
        onChange={handlePasswordChange}
        placeholder={messages.PASSWORD.HINT}
      />
    </Form>
  );
};

export default LoginForm;
