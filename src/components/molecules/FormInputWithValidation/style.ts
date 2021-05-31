import { Input, Label } from 'components/atoms';
import { StyledFormInput } from 'components/molecules/FormInput/style';
import styled from 'styled-components';
export const Content = styled.div`
  padding: 0.5rem 0;
`;
export const StyledLabel = styled(Label)``;
export const StyledFormInputWithValidation = styled(StyledFormInput)`
  border-color: ${(props: { isValid: boolean }) =>
    props.isValid === false ? 'red' : 'inherit'};
`;
