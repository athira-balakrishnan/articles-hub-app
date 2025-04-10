import React, { ReactNode } from 'react';
import '@components/card/card.css';

interface CardProps {
  children: ReactNode;
  clickable?: boolean;
}

const Card: React.FC<CardProps> = ({ children, clickable = false }) => {
  let clickableStyle = {};

  if (clickable) {
    clickableStyle = { cursor: 'pointer' };
  }

  return (
    <div className="card-wrapper" style={clickableStyle}>
      {children}
    </div>
  );
};

export default Card;
