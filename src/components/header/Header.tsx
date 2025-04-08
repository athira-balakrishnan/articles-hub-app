import React from 'react';
import data from '@assets/constants.json'
import '@components/Header/header.css'

const Header : React.FC = () => {
  return (
    <div className='appHeader'>
      {data.appName}
    </div>
  )
}

export default Header;