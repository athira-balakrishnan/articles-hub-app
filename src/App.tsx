import '@src/App.css'
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from '@src/components/structual/Routes'
import Nav from '@components/structual/Nav'


const App: React.FC = () => {
  return (
    <div className="card">
      <p>Article Lists</p>
      <Router>
        <Nav />
        <AppRouter />
      </Router>
    </div>
  )
}

export default App
