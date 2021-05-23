import { render, RenderResult } from '@testing-library/react'
import { ModalProvider } from 'styled-react-modal'
import TranslationProvider from '../locales/TranslationProvider'

export const renderWithProvider = (children: React.ReactNode): RenderResult => {
  render(
    <ModalProvider>
      <TranslationProvider>{children}</TranslationProvider>
    </ModalProvider>
  )
}
