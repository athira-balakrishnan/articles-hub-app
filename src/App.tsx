import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRouter from '@src/components/routes/Routes'
import Nav from '@src/components/nav/Nav'
import '@src/App.css'
import { SelectedItemProvider } from '@context/SelectedItemContext'

const App: React.FC = () => {
  return (
    <div className="app-wrapper">
      <SelectedItemProvider>
        <Router>
          <div className="app-header">
            <Nav />
          </div>
          <AppRouter />
        </Router>
      </SelectedItemProvider>
    </div>
  )
}

export default App
