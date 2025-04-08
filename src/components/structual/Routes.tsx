import React from 'react';
import {Route, Routes } from 'react-router-dom';
import ArticleList from '@pages/ArticleList';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import SearchArticle from '@pages/SearchArticle';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<ArticleList />} />
      <Route path="/search" element={<SearchArticle />} />
      <Route path="*" element={<NotFound />} />  {/* Catch-all route for 404 */}
    </Routes>
  )
}

export default AppRouter;
