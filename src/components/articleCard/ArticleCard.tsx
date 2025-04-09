import React from 'react';
import { Article } from '@pages/articleList/ArticleList';
import Header from '@src/components/header/Header';
import SubTitle from '@components/subTitle/SubTitle';
import '@components/articleCard/articleCard.css'
import SectionText from '@components/sectionText/SectionText';
import { useSelectedItem } from '@hooks/useSelectedItem';

interface ArticleCardProps {
  articleCardDetails: Article,
  handleRoute: () => void
}

const ArticleCard: React.FC<ArticleCardProps> = ({ articleCardDetails, handleRoute }) => {

  const { selectItem } = useSelectedItem();

  const updateContext = () => {
    selectItem(articleCardDetails);
    (handleRoute())
  }

  return (
    <div className='atriclecard-wrapper' onClick={updateContext}>
      {/* <div>
        <img src={articleCardProps.media[0]['media-metadata'][0].url} alt="Media content" style={{ width: '140', height: '210' }} />
        <span><i>{articleCardProps.media[0].caption}</i></span>
      </div> */}
      <div className='atriclecard-content'>  <Header>{articleCardDetails.title}</Header>
        <SubTitle>{`${articleCardDetails.type} | ${articleCardDetails.source} | ${articleCardDetails.published_date}`}</SubTitle>
        <SectionText>{articleCardDetails.abstract}</SectionText>
        <SubTitle>{`Updated on ${articleCardDetails.updated} ${articleCardDetails.byline}`}</SubTitle>
      </div>
    </div>

  )
}

export default ArticleCard;