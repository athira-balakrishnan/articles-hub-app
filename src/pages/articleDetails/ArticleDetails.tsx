import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@src/components/header/Header';
import NotFound from '../notFound/NotFound';
import { useSelectedItem } from '@hooks/useSelectedItem';
import Button from '@src/components/Button/Button';
import constants from '@assets/constants.json';
import Card from '@src/components/card/Card';
import SectionText from '@src/components/sectionText/SectionText';
import SubTitle from '@src/components/subTitle/SubTitle';
import ImageComponent from '@src/components/image/Image';

const ArticleDetails: React.FC = () => {
  const { selectedItem } = useSelectedItem();
  const navigate = useNavigate();

  return (
    <>
      <Button handleClick={() => { navigate('/list') }} styleProp={{ textDecoration: 'underline' }} >
        <>{constants.back}</>
      </Button>
      {
        selectedItem ?
          <Card>
            <Header>{selectedItem.title}</Header>
            <SubTitle>{`${selectedItem.type} | ${selectedItem.source} | ${selectedItem.published_date} | ${selectedItem.section} | ${selectedItem.subsection} `}</SubTitle>
            <ImageComponent src={selectedItem.media[0]['media-metadata'][2].url} copyright={selectedItem.media[0].copyright} caption={selectedItem.media[0].caption} />
            <SectionText>{selectedItem.abstract}</SectionText>
            <SubTitle>{`Updated on ${selectedItem.updated} ${selectedItem.byline}`}</SubTitle>
          </Card>
          : <NotFound />
      }
    </>

  )
}

export default ArticleDetails;