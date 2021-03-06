import * as S from '../styles/Item'
import { useTranslationContext } from '../locales/translationContext'
import Text from './Text'
import Title from './Title'
import { ItemsProps } from '../types/components'

export default function ItemList({
  name,
  species,
  image,
  status,
  width = '283',
  height = '238',
  onclick
}: ItemsProps) {
  const translation = useTranslationContext()

  return (
    <S.Container
      onClick={onclick}
      role="item_container"
      whileHover={{
        position: 'relative',
        zIndex: 1,
        border: ' 2px solid rgba(251, 255, 5, 0.794)',
        borderRadius: '8px',
        scale: 1.1,
        transition: { duration: 0.4 }
      }}
    >
      <S.ImageContainer
        src={image}
        alt={`${translation.IMAGE_EPISODE} ${name}`}
        width={width}
        height={height}
        objectFit="cover"
        title={status}
        loading="lazy"
        role="image"
      />
      <S.Description>
        <Title
          role="item_title"
          arialLabel={`${translation.ARIAL_LABEL_ITEM_TEXT} ${name}`}
          text={name}
          theme={{ color: 'white', letter: '0', margin: '0' }}
        />
        <Text
          role="item_text"
          arialLabel={`${translation.ARIAL_LABEL_ITEM_TEXT} ${name}`}
          text={species}
        />
      </S.Description>
    </S.Container>
  )
}
