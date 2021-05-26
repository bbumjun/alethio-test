import React from 'react';
import { Text } from 'components/atoms';
import * as S from './style';
const FormInput = ({
  label,
  name,
  type,
  required,
  value,
  validator,
  placeholder,
  className,
  validation,
}) => {
  return (
    <S.Label>
      <Text>{label}</Text>
      <S.StyledInput
        name={name}
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        className={className}
        validation={validation}
        validator={validator}
      />
    </S.Label>
  );
};

export default React.memo(FormInput);
