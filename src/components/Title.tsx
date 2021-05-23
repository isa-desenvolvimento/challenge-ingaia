import { TitleProps } from 'types/components'
import * as S from '../styles/Title'

export default function Title({ arialLabel, text, role }: TitleProps) {
  return (
    <S.Title role={role} arial-label={arialLabel}>
      {text}
    </S.Title>
  )
}
