import React from 'react';
import * as S from './style';
const Input = ({ name, value, handleChange, placeholder, required }) => {
  return (
    <S.Input
      type="text"
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      required={required}
    />
  );
};

export default Input;
