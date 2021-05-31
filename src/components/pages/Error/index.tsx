import * as React from 'react';
import Template from 'components/templates/GeneralTemplate';
import { Image, Text } from 'components/atoms';
import { messages } from 'common/constants';
import errorImg from 'images/error.png';
import { AxiosError } from 'axios';
export interface ErrorProps {
  error: AxiosError;
}

const Error = ({ error }: ErrorProps): React.ReactElement => {
  const getErrorMessage = (status: number) => {
    switch (status) {
      case 400:
        return messages.ERROR.BAD_REQUEST;
      case 401:
        return messages.ERROR.UNAUTHORIZED;
      case 403:
        return messages.ERROR.FORBIDDEN;
      case 404:
        return messages.ERROR.NOT_FOUND;
      case 500:
        return messages.ERROR.INTERNAL_SERVER_ERROR;
      default:
        return messages.ERROR.SOMETHING_WRONG;
    }
  };
  const { response } = error;
  const errorMessage = getErrorMessage(response?.status || 999);
  return (
    <Template>
      <Image src={errorImg} alt="error" />
      <Text fontSize={3}>{status}</Text>
      <Text fontSize={2}>{errorMessage}</Text>
    </Template>
  );
};

export default Error;
