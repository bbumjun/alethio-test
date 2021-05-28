import { Text } from 'components/atoms';
import * as S from './style';
const OrderItem = ({ item }) => {
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
