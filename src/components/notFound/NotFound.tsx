import React from 'react';
import '@components/notFound/notFound.css';
import constants from '@assets/constants.json';

interface NotFoundProps {
  errorText?: string;
}

const NotFound: React.FC<NotFoundProps> = ({ errorText }) => {
  const textToDisplay: string = errorText ? errorText : constants.notFound;
  return <div className="notfound-wrapper">{textToDisplay}</div>;
};

export default NotFound;
