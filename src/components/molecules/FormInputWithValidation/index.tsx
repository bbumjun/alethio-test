import React, { EventHandler, FocusEvent, ChangeEvent, FormEvent } from 'react';
import { Text } from 'components/atoms';
import { FormInputProps } from 'components/molecules/FormInput';
import * as S from './style';

export interface ValidOptionTypes {
  minLength: number;
  maxLength: number;
  min: number;
  max: number;
  pattern: string;
}
export interface FormInputWithValidationProps extends FormInputProps {
  handleBlur: EventHandler<FocusEvent>;
  handleInvalid: EventHandler<FormEvent>;
  handleChange: EventHandler<ChangeEvent>;
  isValid: boolean;
  validOptions: Partial<ValidOptionTypes>;
}
const FormInputWithValidation = ({
  label,
  name,
  type,
  value,
  placeholder,
  className,
  handleBlur,
  handleInvalid,
  handleChange,
  isValid,
  validOptions,
}: FormInputWithValidationProps) => {
  return (
    <S.Content>
      <S.StyledLabel htmlFor={name}>
        <Text>{label}</Text>
        <S.StyledFormInputWithValidation
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          onInvalid={handleInvalid}
          onBlur={handleBlur}
          required
          isValid={isValid}
          className={className}
          {...validOptions}
        />
      </S.StyledLabel>
    </S.Content>
  );
};

export default React.memo(FormInputWithValidation);
