import React from 'react';
import '@pages/notFound/notFound.css'
import constants from '@assets/constants.json';

const NotFound : React.FC = () => {
  return (
    <div className='notfound-wrapper'>
      {constants.notFound}
    </div>
  )
}

export default NotFound;
