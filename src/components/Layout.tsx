import TranslationProvider from 'locales/TranslationProvider'
import React from 'react'
import { ChildrenProps } from 'types/components'

export default function Layout({ children }: ChildrenProps) {
  return (
    <TranslationProvider>
      <main>{children}</main>
    </TranslationProvider>
  )
}
