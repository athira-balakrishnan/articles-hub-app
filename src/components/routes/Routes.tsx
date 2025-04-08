import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ArticleList from '@src/pages/articleList/ArticleList';
import Home from '@src/pages/home/Home';
import NotFound from '@src/pages/notFound/NotFound';
import SearchArticle from '@src/pages/searchArticle/SearchArticle';
import '@components/routes/routes.css';

const AppRouter: React.FC = () => {
  return (
    <div className='routeContainer'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<ArticleList />} />
        <Route path="/search" element={<SearchArticle />} />
        <Route path="*" element={<NotFound />} />  {/* Catch-all route for 404 */}
      </Routes>
    </div>
  )
}

export default AppRouter;
