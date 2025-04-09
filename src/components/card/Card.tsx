import React, {ReactNode} from 'react';
import '@components/card/card.css';

interface CardProps {
    children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <div className='card'>
            {children}
        </div>
    )
}

export default Card;