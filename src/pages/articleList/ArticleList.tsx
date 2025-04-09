import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '@pages/articleList/articleList.css';
import data from '@assets/data.json'
import Card from '@src/components/card/Card';
import ArticleCard from '@src/components/articleCard/ArticleCard';
import Header from '@src/components/header/Header';
import constants from '@assets/constants.json';
import SectionText from '@src/components/sectionText/SectionText';
import LoaderList from '@src/components/loaderList/LoaderList';

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
  const [lodading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getArticleList();
  }, [])

  const getArticleList = async () => {
    // await axios.get('testurl')
    //   .then((response) => {
    //     const data: Article[] = response.data.results.map((item: Article) => ({ id: item.id, title: item.title }))
    //     setArticles(data);
    //   })
    //   .catch(() => { })

    const getMetadata = (item: MediaMetaData[]) => item.map((metadata: MediaMetaData) => ({
      url: metadata.url,
      format: metadata.format,
      height: metadata.height,
      width: metadata.width,
    }));

    const getMedia = (item: Media[]) => item.map((mediaItem: Media, index: number) => ({
      type: mediaItem.type,
      caption: mediaItem.caption,
      copyright: mediaItem.copyright,
      'media-metadata': getMetadata(mediaItem['media-metadata']),
    }));

    const results: Article[] = data.results.map((item) => ({
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
    setArticles(results);
    setLoading(false);
  }

  const handleRoute = () => {
    navigate('/details')
  }

  return (
    <div>
      <Header>{constants.articleListHeading}</Header>
      <SectionText>{constants.MVdescription}</SectionText>
      {
        lodading ? <LoaderList /> : articles.map((article) => {
          return (
            <div key={`card${article.id}`}>
              <Card>
                <ArticleCard articleCardDetails={article} handleRoute={handleRoute} />
              </Card>
            </div>
          )
        })}
    </div>
  )
}

export default ArticleList;
