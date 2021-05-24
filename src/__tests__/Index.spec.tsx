import { renderWithProvider } from '../utils/helpers'
import { screen } from '@testing-library/react'

import Home from '../pages/index'

describe('<Home />', () => {
  renderWithProvider(<Home />)

  it('should render component Home', () => {
    expect(screen.getByRole(/home_container/i)).toBeInTheDocument()
  })
})
