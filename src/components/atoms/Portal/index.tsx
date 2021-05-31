import ReactDOM from 'react-dom';
import { ReactElement } from 'react';

const Portal = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}): ReactElement => {
  const globalPortal = document.getElementById('global-portal');
  if (globalPortal) {
    return ReactDOM.createPortal(children, globalPortal);
  }

  const newPortal = document.createElement('div');
  newPortal.id = 'global-portal';

  return ReactDOM.createPortal(children, newPortal);
};
export default Portal;
