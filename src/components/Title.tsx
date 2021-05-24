import { TitleProps } from 'types/components'
import * as S from '../styles/Title'

export default function Title({ arialLabel, text, role, theme }: TitleProps) {
  return (
    <S.Title role={role} arial-label={arialLabel} theme={theme}>
      {text}
    </S.Title>
  )
}
