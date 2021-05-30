import React, { EventHandler, FocusEvent, ChangeEvent, FormEvent } from 'react';
import { Text } from 'components/atoms';
import { InputProps } from 'components/atoms/Input';
import * as S from './style';

export interface ValidOptionTypes {
  minLength: number;
  maxLength: number;
  min: number;
  max: number;
  pattern: string;
}
export interface FormInputProps extends InputProps {
  label: string;
  handleBlur: EventHandler<FocusEvent>;
  handleInvalid: EventHandler<FormEvent>;
  handleChange: EventHandler<ChangeEvent>;
  validOptions: Partial<ValidOptionTypes>;
}
const FormInput = ({
  label,
  name,
  value,
  placeholder,
  className,
  handleBlur,
  handleInvalid,
  handleChange,
  validOptions,
}: FormInputProps) => {
  return (
    <S.Content>
      <S.StyledLabel htmlFor={name}>
        <Text>{label}</Text>
        <S.StyledInput
          name={name}
          type="input"
          value={value}
          onChange={handleChange}
          onInvalid={handleInvalid}
          onBlur={handleBlur}
          placeholder={placeholder}
          className={className}
          required
          isValid
          {...validOptions}
        />
      </S.StyledLabel>
    </S.Content>
  );
};

export default React.memo(FormInput);
