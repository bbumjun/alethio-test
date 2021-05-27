import React from 'react';
import { Text } from 'components/atoms';
import * as S from './style';
const FormInput = ({
  label,
  name,
  type,
  required,
  value,
  onChange,
  validator,
  placeholder,
  className,
  validation,
}) => {
  return (
    <S.StyledLabel labelFor={name}>
      <Text>{label}</Text>
      <S.StyledInput
        name={name}
        type={type}
        value={value}
        required={required}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
        validation={validation}
        validator={validator}
      />
    </S.StyledLabel>
  );
};

export default React.memo(FormInput);
