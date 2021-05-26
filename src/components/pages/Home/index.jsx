import React from 'react';
import Template from 'components/templates/GeneralTemplate';
import { OrderForm } from 'components/organizms';
import productImage from 'images/product.jpg';
const Home = () => {
  return (
    <Template>
      <OrderForm productName="기계식 키보드" src={productImage} />
    </Template>
  );
};

export default Home;
