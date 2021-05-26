import React from 'react';
import { Form } from 'components/molcules';
import * as S from './style';
const OrderForm = ({ productName, src }) => {
  const handleSubmit = () => {};
  return (
    <Form title={productName} submitName="주문하기" onSubmit={handleSubmit}>
      <S.ImageWrapper>
        <S.StyledImage src={src} />
      </S.ImageWrapper>
    </Form>
  );
};

export default OrderForm;
