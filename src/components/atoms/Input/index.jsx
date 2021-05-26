import React from 'react';
import * as S from './style';
const Input = ({
  name,
  type = 'text',
  value,
  placeholder,
  className,
  required,
  validation,
  validator,
}) => {
  return (
    <S.Input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      className={className}
      required={required}
      {...validation}
      {...validator}
    />
  );
};

export default React.memo(Input);
