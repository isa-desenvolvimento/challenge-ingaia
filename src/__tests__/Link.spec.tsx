import { renderWithProvider } from '../utils/helpers'
import { screen } from '@testing-library/react'

import Link from '../components/Link'

describe('<Link />', () => {
  renderWithProvider(
    <Link href="/">
      <h1>Test Link</h1>
    </Link>
  )

  it('should render component Link children', () => {
    expect(
      screen.getByRole('heading', { name: /test Link/i })
    ).toBeInTheDocument()
  })
})
