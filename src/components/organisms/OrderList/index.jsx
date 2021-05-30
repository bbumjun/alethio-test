import * as S from './style';
import { OrderItem } from 'components/molecules';
import { useRouteMatch } from 'react-router-dom';
import { Link } from 'components/atoms';
const OrderList = ({ items = [] }) => {
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
