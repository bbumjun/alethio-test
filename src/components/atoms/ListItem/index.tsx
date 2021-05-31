import React, { ReactElement } from 'react';

export interface ListItemProps {
  className?: string;
  children: ReactElement;
}
const ListItem = ({ children, className }: ListItemProps) => (
  <li className={className}>{children}</li>
);
export default ListItem;
