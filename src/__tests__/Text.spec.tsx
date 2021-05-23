import { renderWithProvider } from '../utils/helpers'
import { screen } from '@testing-library/react'

import Text from '../components/Text'

describe('<Text />', () => {
  beforeEach(() =>
    renderWithProvider(<Text role="text" arialLabel="teste" text="teste" />)
  )

  it('should render the styled-components titles', () => {
    expect(screen.getByRole(/text/i).textContent).toEqual('teste')
  })

  it('should render the styled-components title', () => {
    expect(screen.getByRole(/text/i)).toHaveStyle({
      color: 'white'
    })
  })
})
