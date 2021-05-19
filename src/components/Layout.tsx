import TranslationProvider from 'locales/TranslationProvider'
import React from 'react'
import { ChildrenProps } from 'types/components'
import * as S from 'styles/Layout'
import Nav from './Nav'

export default function Layout({ children }: ChildrenProps) {
  return (
    <TranslationProvider>
      <S.Container>
        <Nav />
        <main>{children}</main>
      </S.Container>
    </TranslationProvider>
  )
}
