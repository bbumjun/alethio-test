import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  &:active {
    color: red;
  }
`;
