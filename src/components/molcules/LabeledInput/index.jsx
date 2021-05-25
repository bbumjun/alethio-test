import React from 'react';
import { Input, Text } from 'components/atoms';
import * as S from './style';
const LabeledInput = ({
  label,
  name,
  value,
  handleChange,
  placeholder,
  required,
}) => {
  return (
    <S.Label>
      <Text>{label}</Text>
      <Input
        name={name}
        value={value}
        handleChange={handleChange}
        placeholder={placeholder}
        required={required}
      />
    </S.Label>
  );
};

export default LabeledInput;
