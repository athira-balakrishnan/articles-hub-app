import React from 'react';
import '@components/Header/header.css'

interface HeaderProp {
  children: string;
}

const Header : React.FC<HeaderProp> = ({children}) => {
  return (
    <div className='appHeader'>
      {children}
    </div>
  )
}

export default Header;