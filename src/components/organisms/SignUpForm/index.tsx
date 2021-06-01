import useFormInputWithValidation from 'hooks/useFormInputWithValidation';
import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { messages } from 'common/constants';
import auth from 'recoil/auth';
import axios from 'axios';
import { Form, FormInputWithValidation } from 'components/molecules';
import { FormEvent, ReactElement } from 'react';

const SignUpForm = (): ReactElement => {
  const emailFormProps = useFormInputWithValidation(messages.EMAIL.CONFIRM);
  const passwordFormProps = useFormInputWithValidation(
    messages.PASSWORD.CONFIRM,
  );
  const passwordConfirmFormProps = useFormInputWithValidation(
    messages.PASSWORD.CONFIRM,
  );
  const mobileFormProps = useFormInputWithValidation(messages.MOBILE.CONFIRM);

  const setToken = useSetRecoilState(auth.tokenState);
  const history = useHistory();
  const redirectToHome = () => history.push('/');
  const signUp = async () => {
    try {
      const res = await axios.post('/sign-up', {
        email: emailFormProps.value,
        password: passwordFormProps.value,
        mobile: mobileFormProps.value,
      });
      setToken(res.data.token);
      alert(messages.SIGNUP.SUCCESS);
      redirectToHome();
    } catch (error) {
      alert(messages.SIGNUP.FAILURE);
    }
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { value: password } = passwordFormProps;
    const { value: passwordAgain } = passwordConfirmFormProps;
    if (password !== passwordAgain) {
      alert(messages.PASSWORD.DISCORDANCE);
      return;
    }
    signUp();
  };

  return (
    <Form title="회원가입" submitName="가입하기" onSubmit={handleSubmit}>
      <FormInputWithValidation
        label="이메일"
        name="email"
        type="email"
        placeholder={messages.EMAIL.HINT}
        validOptions={{}}
        {...emailFormProps}
      />
      <FormInputWithValidation
        label="비밀번호"
        name="password"
        type="password"
        placeholder={messages.PASSWORD.HINT}
        validOptions={{
          minLength: 8,
          maxLength: 15,
        }}
        {...passwordFormProps}
      />
      <FormInputWithValidation
        label="비밀번호 확인"
        name="passwordConfirm"
        type="password"
        placeholder={messages.PASSWORD_AGAIN.HINT}
        validOptions={{
          minLength: 8,
          maxLength: 15,
        }}
        {...passwordConfirmFormProps}
      />
      <FormInputWithValidation
        label="전화번호"
        name="mobile"
        type="text"
        placeholder={messages.MOBILE.HINT}
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
