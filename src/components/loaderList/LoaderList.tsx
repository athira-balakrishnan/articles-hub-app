import React from 'react';
import LoaderCard from '@components/loaderCard/LoaderCard';
import '@components/loaderList/loaderList.css';

const LoaderList: React.FC = () => {
  return (
    <div className="loaderlist-wrapper">
      <LoaderCard />
      <LoaderCard />
    </div>
  );
};

export default LoaderList;
