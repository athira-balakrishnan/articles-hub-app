import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from '@src/components/routes/Routes'
import Nav from '@src/components/nav/Nav'
import '@src/App.css'

const App: React.FC = () => {
  return (
    <div className="app-wrapper">
      <Router>
        <div className="app-header">
          <Nav />
        </div>
        <AppRouter />
      </Router>
    </div>
  )
}

export default App
