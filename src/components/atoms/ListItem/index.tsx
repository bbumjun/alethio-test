import React from 'react';

export interface ListItemProps {
  className?: string;
}
const ListItem: React.FC<ListItemProps> = ({ children, className }) => (
  <li className={className}>{children}</li>
);
export default ListItem;
