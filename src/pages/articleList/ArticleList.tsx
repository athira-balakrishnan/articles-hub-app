import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@components/card/Card';
import ArticleCard from '@components/articleCard/ArticleCard';
import Header from '@components/header/Header';
import constants from '@assets/constants.json';
import apiEndpoints from '@apis/apiEndpoints.json';
import SectionText from '@components/sectionText/SectionText';
import LoaderList from '@components/loaderList/LoaderList';
import { getData } from '@apis/apiWrapper';
import ErrorComponent from '@components/errorComponent/ErrorComponent';

export interface Article {
  id: number;
  title: string;
  type: string;
  source: string;
  published_date: string;
  abstract: string;
  updated: string;
  byline: string;
  section: string;
  subsection: string;
  media: Media[];
}

export interface Media {
  type: string;
  caption: string;
  copyright: string;
  'media-metadata': MediaMetaData[];
}

export interface MediaMetaData {
  url: string;
  format: string;
  height: number;
  width: number;
}

const ArticleList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorInData, setErrorInData] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    getmostViewedArticles();
  }, []);

  const getmostViewedArticles = async (): Promise<void> => {
    try {
      setLoading(true);
      const data = await getData(apiEndpoints.getmostViewedArticles);

      const getMetadata = (item: MediaMetaData[]): MediaMetaData[] =>
        item.map((metadata: MediaMetaData) => ({
          url: metadata.url,
          format: metadata.format,
          height: metadata.height,
          width: metadata.width,
        }));

      const getMedia = (item: Media[]): Media[] =>
        item.map((mediaItem: Media) => ({
          type: mediaItem.type,
          caption: mediaItem.caption,
          copyright: mediaItem.copyright,
          'media-metadata': getMetadata(mediaItem['media-metadata']),
        }));

      if (data) {
        const results: Article[] = data.results.map((item: Article) => ({
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
      }
    } catch (err: unknown) {
      setErrorInData(true);
      if (err instanceof Error) {
        setError(err);
      } else {
        setError(new Error('An unknown error occurred'));
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRoute = (): void => {
    navigate('/details');
  };

  return (
    <div>
      <Header>{constants.articleListHeading}</Header>
      <SectionText>{constants.MVdescription}</SectionText>
      {loading ? (
        <LoaderList />
      ) : errorInData && error ? (
        <ErrorComponent
          error={{
            status: 400,
            // status: error.response.status,
            statusMessage: error.message,
          }}
        />
      ) : (
        articles.map((article) => {
          {
            return (
              <div key={`card${article.id}`}>
                <Card clickable>
                  <ArticleCard
                    articleCardDetails={article}
                    handleRoute={handleRoute}
                  />
                </Card>
              </div>
            );
          }
        })
      )}
    </div>
  );
};

export default ArticleList;
