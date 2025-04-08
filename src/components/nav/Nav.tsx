import React from 'react';
import { Link } from 'react-router-dom';
import '@components/nav/nav.css';

const Nav: React.FC = () => {
  return (
    <nav className='nav'>
      <Link to="/">Home</Link>
      <Link to="/list">Article List</Link>
      <Link to="/search">Search</Link>
    </nav>
  );
};

export default Nav;
