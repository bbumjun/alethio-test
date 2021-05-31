import { InputProps } from 'components/atoms/Input';
import { Text } from 'components/atoms';
import * as S from './style';
import { ReactElement } from 'react';
export interface FormInputProps extends InputProps {
  label: string;
}
const FormInput = ({ name, label, ...rest }: FormInputProps): ReactElement => (
  <S.Content>
    <S.StyledLabel htmlFor={name}>
      <Text>{label}</Text>
      <S.StyledFormInput name={name} {...rest} />
    </S.StyledLabel>
  </S.Content>
);

export default FormInput;
