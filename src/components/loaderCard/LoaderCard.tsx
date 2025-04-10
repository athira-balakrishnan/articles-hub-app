import React from 'react';
import '@components/loaderCard/loaderCard.css';

const LoaderCard: React.FC = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader"></div>
      <div className="loader-para">
        <div className="loader"></div>
        <div className="loader"></div>
        <div className="loader"></div>
      </div>
      <div className="loader"></div>
    </div>
  );
};

export default LoaderCard;
