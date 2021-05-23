import * as S from '../styles/Details'

import Item from '../components/Item'
import Button from '../components/Button'
import { useTranslationContext } from '../locales/translationContext'
import Title from './Title'
import Text from './Text'

export default function Details({
  isOpen,
  onBackgroundClick,
  onEscapeKeydown,
  item
}) {
  const translation = useTranslationContext()

  return (
    <S.ModalContent
      isOpen={isOpen}
      onBackgroundClick={onBackgroundClick}
      onEscapeKeydown={onEscapeKeydown}
      arial-label="Details"
      role="modal"
    >
      <S.ButtonMobile onClick={onBackgroundClick}>x</S.ButtonMobile>

      <S.Container role="details_container">
        <S.Left>
          <S.Margin>
            <Button
              text={translation.CLOSE}
              onclick={onBackgroundClick}
              type="button"
              theme="none"
              arialLabel={translation.BTN_DETAILS}
            />
          </S.Margin>
          <S.Image>
            <Item {...item} width="401" height="598" />
          </S.Image>
        </S.Left>
        <S.Right>
          <S.TextContainer>
            <Title
              role="title_about"
              arialLabel={translation.TITLE_DETAILS_ABOUT}
              text={translation.ABOUT}
            />
            <Text
              role="about_text"
              arialLabel={`${translation.ARIAL_LABEL_DETAILS_TEXT} ${item.name}`}
              text={`${item.name} is a ${item.gender} ${item.species}. It is ${item.status} `}
            />
          </S.TextContainer>
          <S.TextContainer>
            <Title
              role="title_origin"
              arialLabel={translation.TITLE_DETAILS_ORIGIN}
              text={translation.ORIGIN}
            />

            <Text
              role="planet_origin_text"
              arialLabel={`${translation.ARIAL_LABEL_DETAILS_TEXT} ${translation.PLANET}`}
              text={translation.PLANET}
            />

            <S.H1>{translation.TEXT_EARTH}</S.H1>
            <Text
              role="text_origin"
              arialLabel={`${translation.ARIAL_LABEL_DETAILS_TEXT} ${translation.DIMENSION_REPLACEMENT}`}
              text={translation.DIMENSION_REPLACEMENT}
            />
          </S.TextContainer>
          <S.TextContainer>
            <Title
              role="title_location"
              arialLabel={translation.TITLE_DETAILS_LOCATION}
              text={translation.LOCATION}
            />
            <Text
              role="location_text_planet"
              arialLabel={`${translation.ARIAL_LABEL_DETAILS_TEXT} ${translation.PLANET}`}
              text={translation.PLANET}
            />
            <S.H1>{translation.TEXT_EARTH}</S.H1>
            <Text
              role="text_location"
              arialLabel={`${translation.ARIAL_LABEL_DETAILS_TEXT} ${translation.DIMENSION_REPLACEMENT}`}
              text={translation.DIMENSION_REPLACEMENT}
            />
          </S.TextContainer>
        </S.Right>
      </S.Container>
    </S.ModalContent>
  )
}
