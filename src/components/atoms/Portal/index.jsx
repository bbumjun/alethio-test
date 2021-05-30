import ReactDOM from 'react-dom';
const Portal = ({ children }) => {
  const globalPortal = document.getElementById('global-portal');
  return ReactDOM.createPortal(children, globalPortal);
};
export default Portal;
