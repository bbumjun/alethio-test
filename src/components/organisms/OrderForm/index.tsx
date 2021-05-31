import React, { FormEvent } from 'react';
import { Form } from 'components/molecules';
import * as S from './style';
import { useRecoilValue } from 'recoil';
import auth from 'recoil/auth';
import { messages } from 'common/constants';
import { useHistory } from 'react-router-dom';
export interface OrderFormProps {
  productName: string;
  src: string;
}
const OrderForm = ({ productName, src }: OrderFormProps) => {
  const authenticated = useRecoilValue(auth.authenticatedState);
  const history = useHistory();
  const loginAlert = () => {
    alert(messages.LOGIN.REQUIRE);
    history.push('/login');
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!authenticated) {
      loginAlert();
      return;
    }
    if (window.confirm(messages.ORDER.CONFIRM)) {
      alert(messages.ORDER.SUCCESS);
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

export default React.memo(OrderForm);
