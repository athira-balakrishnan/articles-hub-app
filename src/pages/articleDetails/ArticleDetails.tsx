import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '@src/components/header/Header'
import NotFound from '@src/components/notFound/NotFound'
import { useSelectedItem } from '@hooks/useSelectedItem'
import Button from '@src/components/Button/Button'
import constants from '@assets/constants.json'
import Card from '@src/components/card/Card'
import SectionText from '@src/components/sectionText/SectionText'
import SubTitle from '@src/components/subTitle/SubTitle'
import ImageComponent from '@src/components/image/Image'
import { Media, MediaMetaData } from '@pages/articleList/ArticleList'

const ArticleDetails: React.FC = () => {
  const { selectedItem } = useSelectedItem()
  const navigate = useNavigate()

  const getMedia = (): Media | undefined => {
    return selectedItem?.media.filter((item) => item.type === 'image')[
      constants.firstItem
    ]
  }

  const media: Media | undefined = getMedia()

  const getImageDetails = (): MediaMetaData | undefined => {
    return media?.['media-metadata'].filter(
      (item) => item.format === 'mediumThreeByTwo210',
    )[constants.firstItem]
  }

  return (
    <>
      <Button
        handleClick={() => {
          navigate('/list')
        }}
        styleProp={{ textDecoration: 'underline' }}
      >
        <>{constants.back}</>
      </Button>
      {selectedItem && media ? (
        <Card>
          <Header>{selectedItem.title}</Header>
          <SubTitle>{`${selectedItem.type} | ${selectedItem.source} | ${selectedItem.published_date} | ${selectedItem.section} | ${selectedItem.subsection} `}</SubTitle>
          <ImageComponent
            src={getImageDetails()?.url || ''}
            copyright={media.copyright}
            caption={media.caption}
          />
          <SectionText>{selectedItem.abstract}</SectionText>
          <SubTitle>{`Updated on ${selectedItem.updated} ${selectedItem.byline}`}</SubTitle>
        </Card>
      ) : (
        <NotFound />
      )}
    </>
  )
}

export default ArticleDetails
