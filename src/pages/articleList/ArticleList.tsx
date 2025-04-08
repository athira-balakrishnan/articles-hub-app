import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '@pages/articleList/articleList.css';
import data from '@assets/constants.json'

interface Article {
  id: number,
  title: string,
}

const ArticleList: React.FC = () => {

  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    getArticleList();
  }, [])

  const getArticleList = async () => {
    await axios.get('testurl')
      .then((response) => {
        const data: Article[] = response.data.results.map((item: Article) => ({ id: item.id, title: item.title }))
        setArticles(data);
      })
      .catch(() => { })

  }

  return (
    <div className="card">
      <p>{data.articleListHeading}</p>
      <ul>
        {articles.map((article) => JSON.stringify(article))}
      </ul>
    </div>
  )
}

export default ArticleList;
