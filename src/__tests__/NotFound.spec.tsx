import { renderWithProvider } from '../utils/helpers'
import { screen } from '@testing-library/react'

import NotFound from '../pages/404'

describe('<NotFound />', () => {
  beforeEach(() => renderWithProvider(<NotFound />))

  it('should render  NotFound', () => {
    expect(screen.getByRole(/not_found/i).textContent).toEqual(
      'Ops... Personagem não encontrada!'
    )
  })
})
