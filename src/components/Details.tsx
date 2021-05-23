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
  const transition = useTranslationContext()

  return (
    <S.ModalContent
      isOpen={isOpen}
      onBackgroundClick={onBackgroundClick}
      onEscapeKeydown={onEscapeKeydown}
      arial-label="Details"
      role="modal"
    >
      <S.ButtonMobile onClick={onBackgroundClick}>x</S.ButtonMobile>

      <S.Container role="container">
        <S.Left>
          <S.Margin>
            <Button
              text={transition.CLOSE}
              onclick={onBackgroundClick}
              type="button"
              theme="none"
              arialLabel={transition.BTN_DETAILS}
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
              arialLabel={transition.TITLE_DETAILS_ABOUT}
              text={transition.ABOUT}
            />
            <Text
              role="about_text"
              arialLabel={`${transition.ARIAL_LABEL_DETAILS_TEXT} ${item.name}`}
              text={`${item.name} is a ${item.gender} ${item.species}. It is ${item.status} `}
            />
          </S.TextContainer>
          <S.TextContainer>
            <Title
              role="title_origin"
              arialLabel={transition.TITLE_DETAILS_ORIGIN}
              text={transition.ORIGIN}
            />

            <Text
              role="planet_origin_text"
              arialLabel={`${transition.ARIAL_LABEL_DETAILS_TEXT} ${transition.PLANET}`}
              text={transition.PLANET}
            />

            <S.H1>{transition.TEXT_EARTH}</S.H1>
            <Text
              role="text_origin"
              arialLabel={`${transition.ARIAL_LABEL_DETAILS_TEXT} ${transition.DIMENSION_REPLACEMENT}`}
              text={transition.DIMENSION_REPLACEMENT}
            />
          </S.TextContainer>
          <S.TextContainer>
            <Title
              role="title_location"
              arialLabel={transition.TITLE_DETAILS_LOCATION}
              text={transition.LOCATION}
            />
            <Text
              role="location_text_planet"
              arialLabel={`${transition.ARIAL_LABEL_DETAILS_TEXT} ${transition.PLANET}`}
              text={transition.PLANET}
            />
            <S.H1>{transition.TEXT_EARTH}</S.H1>
            <Text
              role="text_location"
              arialLabel={`${transition.ARIAL_LABEL_DETAILS_TEXT} ${transition.DIMENSION_REPLACEMENT}`}
              text={transition.DIMENSION_REPLACEMENT}
            />
          </S.TextContainer>
        </S.Right>
      </S.Container>
    </S.ModalContent>
  )
}
