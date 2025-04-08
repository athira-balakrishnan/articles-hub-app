import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '@pages/articleList/articleList.css';
import data from '@assets/data.json'
import Card from '@src/components/card/Card';
import ArticleCard from '@src/components/articleCard/ArticleCard';

export interface Article {
  id: number,
  title: string,
  type: string,
  source: string,
  published_date: string,
  abstract: string,
  updated: string,
  byline: string,
  section: string,
  subsection: string,
  media: Media[],
}

interface Media {
  type: string,
  caption: string,
  copyright: string,
  'media-metadata': MediaMetaData[],
}

interface MediaMetaData {
  url: string,
  format: string,
  height: number,
  width: number,
}

const ArticleList: React.FC = () => {

  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    getArticleList();
  }, [])

  const getArticleList = async () => {
    // await axios.get('testurl')
    //   .then((response) => {
    //     const data: Article[] = response.data.results.map((item: Article) => ({ id: item.id, title: item.title }))
    //     setArticles(data);
    //   })
    //   .catch(() => { })
    console.log('results', data.results)

    const getMetadata = (item:MediaMetaData[]) => item.map((metadata: MediaMetaData) => ({
      url: metadata.url,
      format: metadata.format,
      height: metadata.height,
      width: metadata.width,
    }));

    const getMedia = (item:Media[] ) => item.map((mediaItem: Media,index: number) => ({
      type: mediaItem.type,
      caption: mediaItem.caption,
      copyright: mediaItem.copyright,
      'media-metadata': getMetadata(mediaItem['media-metadata']),
    }));

    const results:Article[] = data.results.map((item) => ({
      id: item.id,
      title: item.title,
      type: item.type,
      source: item.source,
      published_date: item.published_date,
      abstract: item.abstract,
      updated: item.updated,
      byline: item.byline,
      section: item.section,
      subsection: item.subsection,
      media: getMedia(item.media),
    }));
    console.log('results', results)
    setArticles(results);


  }

  return (
    <div>
      {
        articles.map((article) => {
          return (<Card key={`card${article.id}`}><ArticleCard articleCardProps={article} /></Card>)
        })}
    </div>
  )
}

export default ArticleList;
