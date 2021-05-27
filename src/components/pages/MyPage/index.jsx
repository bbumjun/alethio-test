import React, { useState, useEffect } from 'react';
import Template from 'components/templates/GeneralTemplate';
import OrderList from 'components/organizms/OrderList';
import axios from 'axios';
import * as S from './style';
import Loader from 'components/atoms/Loader';
const MyPage = () => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get('/order', {
          params: {
            page,
          },
        });
        setData(res.data);
        setLoading(false);
      } catch (err) {
        alert('에러 발생');
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
  return (
    <Template>
      <h1>주문 목록</h1>
      <OrderList items={data.content} />
      <S.ButtonList>
        {[...Array(data.totalPages)].map((item, i) => (
          <S.PageButton
            key={i}
            id={i}
            onClick={(e) => {
              setPage(Number(e.target.id));
            }}
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
