import { renderWithProvider } from '../utils/helpers'
import { screen } from '@testing-library/react'

import Layout from '../components/Layout'

describe('<Layout />', () => {
  beforeEach(() =>
    renderWithProvider(
      <Layout>
        <h1>Test Layout</h1>
      </Layout>
    )
  )

  it('should render component Layout children', () => {
    expect(
      screen.getByRole('heading', { name: /test Layout/i })
    ).toBeInTheDocument()
  })

  it('should render the styled-components layout', () => {
    expect(screen.getByRole(/layout/i)).toHaveStyle({
      height: '100vh',
      width: '100%',
      'background-image': 'url("/assets/background.png")',
      'background-position': 'center',
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
      'background-color': 'rgb(15, 15, 15)',
      overflow: 'scroll'
    })
  })
})
