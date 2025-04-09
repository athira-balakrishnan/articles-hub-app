import React from 'react'
import constants from '@assets/constants.json'
import Header from '@src/components/header/Header'

const Home: React.FC = () => {
  return <Header>{constants.articleListHeading}</Header>
}

export default Home
