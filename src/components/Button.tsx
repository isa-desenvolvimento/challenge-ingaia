import * as S from 'styles/Button'
import { ButtonProps } from 'types/components'

export default function Button({
  text,
  onclick,
  disabled = false,
  type = 'button',
  isMobileDetails = 'block'
}: ButtonProps) {
  return (
    <S.Button
      disabled={disabled}
      type={type}
      onClick={onclick}
      isMobileDetails={isMobileDetails}
    >
      {text}
    </S.Button>
  )
}
