import React, { ReactElement } from 'react';
import NotFound from '@components/notFound/NotFound';
import constants from '@assets/constants.json';

interface ErrorProp {
  error: ErrorType;
}

export interface ErrorType {
  status: number;
  statusMessage: string;
}

enum StatusCode {
  Unauthorized = constants.unauthorizedErrorCode,
  NotFound = constants.notFoundErrorCode,
  Unexpected = constants.unexpectedErrorCode,
}

const ErrorComponent: React.FC<ErrorProp> = ({ error }) => {
  const renderErrorBlock = (): ReactElement => {
    switch (error.status) {
      case StatusCode.Unauthorized:
        return <NotFound errorText={constants.unauthorized} />;
      case StatusCode.NotFound:
        return <NotFound errorText={constants.notFound} />;
      case StatusCode.Unexpected:
        return <NotFound errorText={constants.unexpectedError} />;
      default:
        return <NotFound errorText={constants.unexpectedError} />;
    }
  };

  return renderErrorBlock();
};

export default ErrorComponent;
