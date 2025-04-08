import React from 'react';
import { Link } from 'react-router-dom';
import '@components/nav/nav.css';

const Nav: React.FC = () => {
  return (
    <nav className='nav-wrapper'>
      <Link to="/">Home</Link>
      <Link to="/list">Article List</Link>
    </nav>
  );
};

export default Nav;
