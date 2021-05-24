import { useTranslationContext } from '../locales/translationContext'

export default function NotFoundItem() {
  const translation = useTranslationContext()

  return <div role="not_found">{translation.NOT_FOUND}</div>
}
