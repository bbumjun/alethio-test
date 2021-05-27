import React from 'react';
import * as S from './style';
const OrderItem = ({ item }) => {
  return (
    <S.StyledItem>
      <S.ID>주문 ID : {item.id}</S.ID>
      <S.Name>제품명 : {item.itemName}</S.Name>
    </S.StyledItem>
  );
};

export default OrderItem;
