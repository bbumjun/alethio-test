import React, { useState, useEffect, ReactElement } from 'react';
import Template from 'components/templates/GeneralTemplate';
import { OrderItem } from 'components/molecules';
import { OrderItemType } from 'components/molecules/OrderItem';
import * as S from './style';
import axios, { AxiosError } from 'axios';
import Loader from 'components/atoms/Loader';
import { useParams, useHistory } from 'react-router-dom';
import { Image, Text } from 'components/atoms';
import backIcon from 'images/back.svg';
import Error from '../Error';
interface ParamsType {
  id: string;
}

interface serverResponse {
  data: OrderItemType;
}
const MyOrderDetail = (): ReactElement => {
  const [data, setData] = useState<OrderItemType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError | null>(null);
  const { id } = useParams<ParamsType>();
  const history = useHistory();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res: serverResponse = await axios.get<OrderItemType>(
          `/order/${id}`,
        );
        setData(res.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
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
  if (error) {
    return <Error error={error} />;
  }
  if (!data) {
    return (
      <Template>
        <Text>데이터가 존재하지 않습니다.</Text>
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
