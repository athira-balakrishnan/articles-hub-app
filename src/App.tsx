import React from 'react';
import Header from '@src/components/header/Header'
import PageContent from '@src/components/pageContent/PageContent'
import '@src/App.css'

const App: React.FC = () => {
  return (
    <div className="page">
      <Header/>
      <PageContent />
    </div>
  )
}

export default App
