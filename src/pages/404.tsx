import { useTranslationContext } from 'locales/translationContext'

export default function NotFound() {
  const translation = useTranslationContext()
  return <div>{translation.NOT_FOUND}</div>
}
