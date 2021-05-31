import React, { LabelHTMLAttributes, ReactElement } from 'react';
export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  children: ReactElement | ReactElement[];
}
const Label = ({ htmlFor, children, ...rest }: LabelProps) => {
  return (
    <label htmlFor={htmlFor} {...rest}>
      {children}
    </label>
  );
};
export default React.memo(Label);
