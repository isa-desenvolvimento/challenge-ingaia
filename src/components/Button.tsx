import * as S from 'styles/Button'
import { ButtonProps } from 'types/components'

export default function Button({
  text,
  onclick,
  isMobile = false,
  disabled = false,
  type = 'button'
}: ButtonProps) {
  return (
    <S.Button
      onClick={onclick}
      isMobile={isMobile}
      disabled={disabled}
      type={type}
    >
      {text}
    </S.Button>
  )
}
