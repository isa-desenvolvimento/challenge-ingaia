import * as S from 'styles/Modal'

import Item from 'components/Item'
import Button from 'components/Button'
import { useTranslationContext } from 'locales/translationContext'

export default function Details({ item }) {
  const transition = useTranslationContext()

  return (
    <S.Modal>
      <S.Container>
        <S.Left>
          <Button text={transition.CLOSE} isMobile={true} />
          <S.Image>
            <Item {...item} width="401" height="598" />
          </S.Image>
        </S.Left>
        <S.Right>
          <S.TextContainer>
            <S.Title>{transition.ABOUT}</S.Title>
            <S.Text>
              Rick Sanchez is a male human. He is alive and well. Last seen in
              May 31, 2020.
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
    </S.Modal>
  )
}
