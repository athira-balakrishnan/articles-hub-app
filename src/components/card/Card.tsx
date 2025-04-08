import React, {ReactNode} from 'react';
import '@components/card/card.css';

interface CardProps {
    children: ReactNode;
    key: string // Explicitly define children
}

const Card: React.FC<CardProps> = ({ children, key }) => {
    return (
        <div className='card'>
            {children}
        </div>
    )
}

export default Card;