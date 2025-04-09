import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@src/components/header/Header';
import NotFound from '../notFound/NotFound';
import { useSelectedItem } from '@hooks/useSelectedItem';
import Button from '@src/components/Button/Button';
import constants from '@assets/constants.json';
import Card from '@src/components/card/Card';
import SectionText from '@src/components/sectionText/SectionText';

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
            <Header> {selectedItem.title} </Header>
            {/* <Image></Image> */}
            <SectionText> {selectedItem.abstract} </SectionText>
          </Card>
          : <NotFound />
      }
    </>

  )
}

export default ArticleDetails;