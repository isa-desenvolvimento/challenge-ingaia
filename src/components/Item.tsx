import * as S from 'styles/Item'
import { useTranslationContext } from 'locales/translationContext'

type ItemsProps = {
  name: string
  image: string
  species: string
  status: string
}

export default function ItemList({ name, species, image, status }: ItemsProps) {
  const translation = useTranslationContext()

  return (
    <S.Container>
      <S.ImageContainer
        src={image}
        alt={`${translation.IMAGE_EPISODE} ${name}`}
        width="283"
        height="283"
        objectFit="cover"
        title={status}
      />
      <S.Description>
        <div>
          <h2>{name}</h2>
          <span> {species} </span>
        </div>
      </S.Description>
    </S.Container>
  )
}
