import React from 'react';
import { Form } from 'components/molcules';
import * as S from './style';
import { useRecoilValue } from 'recoil';
import auth from 'recoil/auth';
import { message } from 'common/config';
import { useHistory } from 'react-router-dom';
const OrderForm = ({ productName, src }) => {
  const authenticated = useRecoilValue(auth.authenticatedState);
  const history = useHistory();
  const loginAlert = () => {
    alert(message.require.LOGIN);
    history.push('/login');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!authenticated) {
      loginAlert();
      return;
    }
    if (window.confirm(message.question.ORDER)) {
      alert(message.success.ORDER);
    }
  };
  return (
    <Form title={productName} submitName="주문하기" onSubmit={handleSubmit}>
      <S.ImageWrapper>
        <S.StyledImage src={src} alt={productName} />
      </S.ImageWrapper>
    </Form>
  );
};

export default OrderForm;
