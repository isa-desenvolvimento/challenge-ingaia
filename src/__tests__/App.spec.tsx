import { renderWithProvider } from '../utils/helpers'
import { screen } from '@testing-library/react'

import App from '../pages/_app'
import Home from '../pages/index'

describe('<App />', () => {
  renderWithProvider(<App Component={Home} pageProps={{}} />)

  it('should render component App', () => {
    expect(screen.getByRole(/home_container/i)).toBeInTheDocument()
  })
})
