import { useTranslationContext } from 'locales/translationContext'

export default function NotFoundItem() {
  const translation = useTranslationContext()

  return <div>{translation.NOT_FOUND}</div>
}
