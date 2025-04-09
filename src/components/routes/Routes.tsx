import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ArticleList from '@src/pages/articleList/ArticleList';
import Home from '@src/pages/home/Home';
import NotFound from '@src/components/notFound/NotFound';
import '@components/routes/routes.css';
import ArticleDetails from '@src/pages/articleDetails/ArticleDetails';

const AppRouter: React.FC = () => {
  return (
    <div className='routes-container'>
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/home" element={<Home />} />
        <Route path="/list" element={<ArticleList />} />
        <Route path="/details" element={<ArticleDetails />} />
        <Route path="*" element={<NotFound />} />  {/* Catch-all route for 404 */}
      </Routes>
    </div>
  )
}

export default AppRouter;
