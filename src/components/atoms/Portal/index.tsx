import ReactDOM from 'react-dom';
import React, { ReactElement } from 'react';

const Portal = ({ children }: ReactElement | ReactElement[]) => {
  const globalPortal = document.getElementById('global-portal');
  if (globalPortal) {
    return ReactDOM.createPortal(children, globalPortal);
  }

  const newPortal = document.createElement('div');
  newPortal.id = 'global-portal';

  return ReactDOM.createPortal(children, newPortal);
};
export default Portal;
