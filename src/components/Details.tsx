import * as S from 'styles/Details'

import Item from 'components/Item'
import Button from 'components/Button'
import { useTranslationContext } from 'locales/translationContext'

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
    >
      <S.ButtonMobile onClick={onBackgroundClick}>x</S.ButtonMobile>

      <S.Container>
        <S.Left>
          <S.Margin>
            <Button
              text={transition.CLOSE}
              onclick={onBackgroundClick}
              type="button"
              isMobileDetails="none"
            />
          </S.Margin>
          <S.Image>
            <Item {...item} width="401" height="598" />
          </S.Image>
        </S.Left>
        <S.Right>
          <S.TextContainer>
            <S.Title>{transition.ABOUT}</S.Title>
            <S.Text>
              {`${item.name} is a ${item.gender} ${item.species}. It is ${item.status} `}
            </S.Text>
          </S.TextContainer>
          <S.TextContainer>
            <S.Title>{transition.ORIGIN}</S.Title>
            <S.Text>Planet</S.Text>
            <S.H1>Earth (Replacement Dimension)</S.H1>
            <S.Text>Replacement Dimension</S.Text>
          </S.TextContainer>
          <S.TextContainer>
            <S.Title>{transition.LOCATION}</S.Title>
            <S.Text>Planet</S.Text>
            <S.H1>Earth (Replacement Dimension)</S.H1>
            <S.Text>Replacement Dimension</S.Text>
          </S.TextContainer>
        </S.Right>
      </S.Container>
    </S.ModalContent>
  )
}
