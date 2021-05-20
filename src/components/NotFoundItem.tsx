import { useTranslationContext } from 'locales/translationContext'

export default function NotFoundItem() {
  const { translation } = useTranslationContext()

  return <div>personagem nao encontrado</div>
}
