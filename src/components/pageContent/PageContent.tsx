import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from '@src/components/routes/Routes'
import Nav from '@src/components/nav/Nav'
import '@components/pageContent/pageContent.css';

const PageContent: React.FC = () => {
  return (
    <div className='content'>
      <Router>
        <Nav />
        <AppRouter />
      </Router>
    </div>
  )
}

export default PageContent;