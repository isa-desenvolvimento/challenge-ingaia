import * as S from '../styles/Button'
import { ButtonProps } from '../types/components'

export default function Button({
  text,
  onclick,
  disabled = false,
  type = 'button',
  theme = 'block',
  arialLabel
}: ButtonProps) {
  return (
    <S.Button
      disabled={disabled}
      type={type}
      onClick={onclick}
      theme={theme}
      arial-label={arialLabel}
      role="button"
    >
      {text}
    </S.Button>
  )
}
