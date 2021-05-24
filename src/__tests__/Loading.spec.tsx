import { renderWithProvider } from '../utils/helpers'
import { screen } from '@testing-library/react'

import Loading from '../components/Loading'

describe('<Loading />', () => {
  beforeEach(() => renderWithProvider(<Loading />))

  it('should render the components Loading', () => {
    expect(screen.getByRole(/loading/i).textContent).toEqual('Carregando...')
  })

  it('should render the styled-components loading', () => {
    expect(screen.getByRole(/loading/i)).toHaveStyle({
      background: '#00000080',
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center'
    })
  })

  it('should render the styled-components image', () => {
    expect(screen.getByRole(/image/i)).toHaveStyle({
      position: 'absolute',
      top: '0px',
      left: '0px',
      bottom: '0px',
      right: '0px',
      'box-sizing': 'border-box',
      padding: '0px',
      margin: 'auto',
      display: 'block',
      width: '0px',
      height: '0px',
      'min-width': '100%',
      'max-width': '100%',
      'min-height': '100%',
      'max-height': '100%'
    })
  })
})
