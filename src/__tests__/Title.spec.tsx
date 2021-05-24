import { renderWithProvider } from '../utils/helpers'
import { screen } from '@testing-library/react'

import Title from '../components/Title'

describe('<Title />', () => {
  beforeEach(() =>
    renderWithProvider(
      <Title
        role="title_about"
        arialLabel="teste"
        text="teste"
        theme={{ color: '#fff', letter: '1.8rem', margin: '1rem' }}
      />
    )
  )

  it('should render the styled-components titles', () => {
    expect(screen.getByRole(/title_about/i).textContent).toEqual('teste')
  })

  it('should render the styled-components title', () => {
    expect(screen.getByRole(/title_about/i)).toHaveStyle({
      color: '#fff',
      'margin-bottom': '1rem',
      'letter-spacing': '1.8rem'
    })
  })
})
