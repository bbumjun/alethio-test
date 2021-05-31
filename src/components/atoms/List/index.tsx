import React, { ReactElement } from 'react';
import styled from 'styled-components';

const StyledList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;
export interface ListProps {
  className?: string;
  children: ReactElement;
}
const List = ({ children, className = '' }: ListProps) => {
  return <StyledList className={className}>{children}</StyledList>;
};

export default List;
