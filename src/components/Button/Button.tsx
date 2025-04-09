import React, { ReactElement } from 'react'
import '@components/Button/button.css'

interface KeyValuePair {
  [key: string]: string
}

interface ButtonProp {
  children: ReactElement
  handleClick: () => void
  styleProp?: KeyValuePair
}

const Button: React.FC<ButtonProp> = ({ children, handleClick, styleProp }) => {
  return (
    <button className="button-wrapper" style={styleProp} onClick={handleClick}>
      {children}
    </button>
  )
}

export default Button
