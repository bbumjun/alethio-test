import { Text } from 'components/atoms';
import { ReactElement } from 'react';
import * as S from './style';
export interface OrderItemType {
  id: string;
  itemName: string;
}
export interface OrderItemProps {
  item: OrderItemType;
}
const OrderItem = ({ item }: OrderItemProps): ReactElement => {
  return (
    <S.StyledItem>
      <S.ID>
        <Text>주문 ID</Text>
        <Text fontWeight="bold">{item.id}</Text>
      </S.ID>
      <S.Name>
        <Text>제품명</Text>
        <Text fontWeight="bold">{item.itemName}</Text>
      </S.Name>
    </S.StyledItem>
  );
};

export default OrderItem;
