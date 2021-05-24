import { renderWithProvider } from '../utils/helpers'
import { screen } from '@testing-library/react'

import NotFoundItem from '../components/NotFoundItem'

describe('<NotFoundItem />', () => {
  beforeEach(() => renderWithProvider(<NotFoundItem />))

  it('should render the styled-components NotFoundItem', () => {
    expect(screen.getByRole(/not_found/i).textContent).toEqual(
      'Ops... Personagem não encontrada!'
    )
  })
})
