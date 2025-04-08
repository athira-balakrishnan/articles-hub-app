import React from 'react';
import '@components/subTitle/subTitle.css'

interface SubTitleProp {
  children: string;
}

const SubTitle : React.FC<SubTitleProp> = ({children}) => {
  return (
    <span className='subtitle'>
      {children}
    </span>
  )
}

export default SubTitle;