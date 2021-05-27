import React from 'react';
import styled from 'styled-components';

const StyledList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const List = ({ children, className }) => {
  return <StyledList className={className}>{children}</StyledList>;
};

export default List;
