import React from 'react';

const Label = ({ labelFor = '', children = '' }) => {
  return <label for={labelFor}>{children}</label>;
};
export default Label;
