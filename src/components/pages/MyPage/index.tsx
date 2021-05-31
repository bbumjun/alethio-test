import React, { useState, useEffect, MouseEvent, ReactElement } from 'react';
import Template from 'components/templates/GeneralTemplate';
import OrderList from 'components/organisms/OrderList';
import { OrderItemType } from 'components/molecules/OrderItem';
import axios from 'axios';
import * as S from './style';
import Loader from 'components/atoms/Loader';
import { messages } from 'common/constants';
import { Text } from 'components/atoms';
interface ServerResponse {
  data: ServerData;
}
interface ServerData {
  totalPages: number;
  currentPage: number;
  content: OrderItemType[];
}
interface PageButtonType extends HTMLButtonElement {
  id: string;
}
const MyPage = (): ReactElement => {
  const [data, setData] = useState<ServerData | null>(null);
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res: ServerResponse = await axios.get<ServerData>('/order', {
          params: {
            page,
          },
        });
        setData(res.data);
        setLoading(false);
      } catch (error) {
        switch (error) {
          case 400:
            alert(messages.ERROR.BAD_REQUEST);
            break;
          case 401:
            alert(messages.ERROR.UNAUTHORIZED);
            break;
          case 403:
            alert(messages.ERROR.FORBIDDEN);
            break;
          case 404:
            alert(messages.ERROR.NOT_FOUND);
            break;
          case 500:
            alert(messages.ERROR.INTERNAL_SERVER_ERROR);
            break;
          default:
            alert(messages.ERROR.SOMETHING_WRONG);
        }
      }
    };

    fetchData();
  }, [page]);

  if (loading)
    return (
      <Template>
        <Loader />
      </Template>
    );
  if (!data || data.content.length === 0)
    return (
      <Template>
        <Text>불러올 데이터가 없습니다.</Text>
      </Template>
    );

  const handleClickPageButton = (e: MouseEvent<PageButtonType>) => {
    setPage(Number(e.currentTarget.id));
  };
  return (
    <Template>
      <h1>주문 목록</h1>
      <OrderList items={data.content} />
      <S.ButtonList>
        {[...Array(data.totalPages)].map((item, i) => (
          <S.PageButton
            key={i}
            id={String(i)}
            onClick={handleClickPageButton}
            highlight={page === i}
          >
            {i + 1}
          </S.PageButton>
        ))}
      </S.ButtonList>
    </Template>
  );
};

export default MyPage;
