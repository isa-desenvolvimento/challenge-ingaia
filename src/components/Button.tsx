import * as S from 'styles/Button'
import { ButtonProps } from 'types/components'

export default function Button({
  text,
  onclick,
  isMobile = false,
  disabled = false,
  type = 'button',
  hasMargin = false
}: ButtonProps) {
  return (
    <S.Button
      onClick={onclick}
      isMobile={isMobile}
      disabled={disabled}
      type={type}
      hasMargin={hasMargin}
    >
      {text}
    </S.Button>
  )
}
