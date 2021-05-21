import * as S from 'styles/Button'
import { ButtonProps } from 'types/components'

export default function Button({
  text,
  onclick,
  disabled = false,
  type = 'button'
}: ButtonProps) {
  return (
    <S.Button disabled={disabled} type={type} onClick={onclick}>
      {text}
    </S.Button>
  )
}
