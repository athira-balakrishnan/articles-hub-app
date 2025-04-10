import React, { ReactElement } from 'react';
import '@components/sectionText/sectionText.css';

interface SectionTextProp {
  children: string | ReactElement;
}

const SectionText: React.FC<SectionTextProp> = ({ children }) => {
  return <div className="sectiontext-wrapper">{children}</div>;
};

export default SectionText;
