import { useTranslationContext } from '../locales/translationContext'
import * as S from '../styles/Loading'
import Image from 'next/image'
export default function Loading() {
  const translation = useTranslationContext()

  return (
    <S.Container role="loading">
      <S.ImageContainer>
        <Image
          src="/assets/background-loading.png"
          width="183"
          height="183"
          alt={translation.ALT_LOADING}
          role="image"
        />
        <S.Text>{translation.LOADING}</S.Text>
      </S.ImageContainer>
    </S.Container>
  )
}
