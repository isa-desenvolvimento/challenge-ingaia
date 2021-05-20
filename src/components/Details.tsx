import Link from 'components/Link'
import * as S from 'styles/Card'
import { Button } from 'styles/Nav'

import Item from 'components/Item'

export default function Details({ item }) {
  return (
    <S.Modal>
      <S.Container>
        <S.Left>
          <S.Button>close</S.Button>
          <S.Image>
            <Item {...item} width="401" height="598" />
          </S.Image>
        </S.Left>
        <S.Right>
          <S.TextContainer>
            <S.Title>About</S.Title>
            <S.Text>
              Rick Sanchez is a male human. He is alive and well. Last seen in
              May 31, 2020.
            </S.Text>
          </S.TextContainer>
          <S.TextContainer>
            <S.Title>Origin</S.Title>
            <S.Text>Planet</S.Text>
            <S.H1>Earth (Replacement Dimension)</S.H1>
            <S.Text>Replacement Dimension</S.Text>
          </S.TextContainer>
          <S.TextContainer>
            <S.Title>Location</S.Title>
            <S.Text>Planet</S.Text>
            <S.H1>Earth (Replacement Dimension)</S.H1>
            <S.Text>Replacement Dimension</S.Text>
          </S.TextContainer>
        </S.Right>
      </S.Container>
    </S.Modal>
  )
}
