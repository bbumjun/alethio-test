import * as S from './style';
import { OrderItem } from 'components/molecules';
import { OrderItemType } from 'components/molecules/OrderItem';
import { useRouteMatch } from 'react-router-dom';
import { Link } from 'components/atoms';
import { ReactElement } from 'react';
const OrderList = ({ items }: { items: OrderItemType[] }): ReactElement => {
  const { url } = useRouteMatch();

  return (
    <S.StyledList>
      {items.map((item) => (
        <Link to={`${url}/${item.id}`} key={item.id}>
          <OrderItem item={item} />
        </Link>
      ))}
    </S.StyledList>
  );
};

export default OrderList;
