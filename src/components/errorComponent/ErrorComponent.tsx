import React from 'react';
import NotFound from '@components/notFound/NotFound';
import constants from '@assets/constants.json';

interface ErrorProp {
  error: ErrorType;
}

interface ErrorType {
  status: number;
  statusMessage: string;
}

const ErrorComponent: React.FC<ErrorProp> = ({error}) => {
  const renderErrorBlock = () => {
    switch (error.status) {
      case 401:
        return <NotFound errorText={constants.unauthorized} />
      case 404:
        return <NotFound errorText={constants.notFound} />
      case 500:
        return <NotFound errorText={constants.unexpectedError} />
      default:
        return <NotFound errorText={constants.unexpectedError} />
    }
  };

  return (
    renderErrorBlock()
  )
}

export default ErrorComponent;
