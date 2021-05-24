import { render, RenderResult } from '@testing-library/react'
import { ModalProvider } from 'styled-react-modal'
import TranslationProvider from '../locales/TranslationProvider'
import GET_CHARACTERES from '../lib/queries/getCharacteres'

export const renderWithProvider = (children: React.ReactNode): RenderResult => {
  render(
    <ModalProvider>
      <TranslationProvider>{children}</TranslationProvider>
    </ModalProvider>
  )
}
export const mocks = [
  {
    request: {
      query: GET_CHARACTERES,
      variables: {
        name: 'rick',
        pages: 2
      }
    },
    result: {
      data: {
        characters: {
          results: [
            {
              id: '1',
              name: 'rick',
              species: 'human',
              status: 'alive',
              gender: '',
              image: '/assets/background.png'
            }
          ]
        }
      }
    }
  }
]
