import React, { ReactElement } from 'react'
import '@components/Header/header.css'

interface HeaderProp {
  children: string | ReactElement
}

const Header: React.FC<HeaderProp> = ({ children }) => {
  return <div className="header-wrapper">{children}</div>
}

export default Header
