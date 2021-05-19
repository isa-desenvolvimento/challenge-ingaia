import { createContext, useContext } from 'react'
import { localeContextProps } from 'types/components'
import pt from './pt'

export const LocaleContext = createContext<localeContextProps>({ pt })

export function useTranslationContext() {
  return useContext(LocaleContext)
}
