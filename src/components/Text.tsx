import { TitleProps } from 'types/components'
import * as S from '../styles/Title'

export default function Text({ arialLabel, text, role }: TitleProps) {
  return (
    <S.Text role={role} arial-label={arialLabel}>
      {text}
    </S.Text>
  )
}
