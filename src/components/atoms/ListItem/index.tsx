import React, { ReactElement } from 'react';

export interface ListItemProps {
  className?: string;
  children: ReactElement | ReactElement[] | Element[];
}
const ListItem = ({ children, className }: ListItemProps): ReactElement => (
  <li className={className}>{children}</li>
);
export default ListItem;
