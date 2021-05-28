import React, { useState, useEffect } from 'react';
import Template from 'components/templates/GeneralTemplate';
import { OrderItem } from 'components/molecules';
import * as S from './style';
import axios from 'axios';
import Loader from 'components/atoms/Loader';
import { useParams, useHistory } from 'react-router-dom';
import { Image } from 'components/atoms';
import backIcon from 'images/back.svg';
const MyOrderDetail = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/order/${id}`);
        setData(res.data);
        setLoading(false);
      } catch (err) {}
    };
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <Template>
        <Loader />
      </Template>
    );
  }
  return (
    <Template>
      <h1>주문상세</h1>
      <S.Wrapper>
        <OrderItem item={data} />
        <S.BackButton onClick={() => history.goBack()}>
          <Image src={backIcon} />
        </S.BackButton>
      </S.Wrapper>
    </Template>
  );
};

export default MyOrderDetail;
