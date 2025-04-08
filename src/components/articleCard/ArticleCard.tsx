import React from 'react';
import { Article } from '@pages/articleList/ArticleList';
import Header from '@components/header/Header';
import SubTitle from '../subTitle/SubTitle';
import '@components/articleCard/articleCard.css'

interface ArticleCardProps {
  articleCardProps: Article
}

const ArticleCard: React.FC<ArticleCardProps> = ({ articleCardProps }) => {

  const handleClick = () => {
    console.log(articleCardProps);
  }

  return (
    <div className='atriclecard-wrapper' onClick={handleClick}>
      {/* <div>
        <img src={articleCardProps.media[0]['media-metadata'][0].url} alt="Media content" style={{ width: '140', height: '210' }} />
        <span><i>{articleCardProps.media[0].caption}</i></span>
      </div> */}
      <div className='atriclecard-content'>  <Header>{articleCardProps.title}</Header>
        <SubTitle>{`${articleCardProps.type} | ${articleCardProps.source} | ${articleCardProps.published_date}`}</SubTitle>
        <p>{articleCardProps.abstract}</p>
        <SubTitle>{`Updated on ${articleCardProps.updated} ${articleCardProps.byline}`}</SubTitle>
      </div>
    </div>

  )
}

export default ArticleCard;