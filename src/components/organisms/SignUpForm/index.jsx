import useFormInput from 'hooks/useFormInput';
import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { message } from 'common/constants';
import auth from 'recoil/auth';
import axios from 'axios';
import { Form, FormInput } from 'components/molecules';

const SignUpForm = () => {
  const emailFormProps = useFormInput(message.confirm.EMAIL);
  const passwordFormProps = useFormInput(message.confirm.PASSWORD);
  const passwordConfirmFormProps = useFormInput(message.confirm.PASSWORD);
  const mobileFormProps = useFormInput(message.confirm.MOBILE);
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
        alert(message.error.ERROR_OCCURRED);
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
    <Form title="회원가입" submitName="가입하기" onSubmit={handleSubmit}>
      <FormInput
        label="이메일"
        name="email"
        type="email"
        placeholder={message.type.EMAIL}
        {...emailFormProps}
      />
      <FormInput
        label="비밀번호"
        name="password"
        type="password"
        placeholder={message.type.PASSWORD}
        validOptions={{
          minLength: 8,
          maxLength: 15,
        }}
        {...passwordFormProps}
      />
      <FormInput
        label="비밀번호 확인"
        name="passwordConfirm"
        type="password"
        placeholder={message.type.PASSWORD_AGAIN}
        validOptions={{
          minLength: 8,
          maxLength: 15,
        }}
        {...passwordConfirmFormProps}
      />
      <FormInput
        label="전화번호"
        name="mobile"
        type="text"
        placeholder={message.type.MOBILE}
        validOptions={{
          minLength: 11,
          maxLength: 11,
          pattern: '[0-9]+',
        }}
        {...mobileFormProps}
      />
    </Form>
  );
};

export default SignUpForm;
