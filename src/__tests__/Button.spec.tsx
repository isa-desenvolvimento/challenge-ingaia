import { renderWithProvider } from '../utils/helpers'
import { screen } from '@testing-library/react'

import Button from '../components/Button'

describe('<Button />', () => {
  beforeEach(() =>
    renderWithProvider(<Button arialLabel="teste" text="teste" type="submit" />)
  )

  it('should render text button', () => {
    expect(screen.getByRole(/button/i).textContent).toEqual('teste')
  })

  it('should render the styled-components button', () => {
    expect(screen.getByRole(/button/i)).toHaveStyle({
      'margin-left': '15px',
      width: '5em',
      color: 'white',
      'border-color': 'rgba(255,255,255,0.664)',
      'background-color': 'transparent',
      'border-radius': '5px',
      'transition-duration': '0.4s',
      padding: '1rem',
      height: 'auto',
      display: 'flex',
      'justify-content': 'center',
      'align-self': 'flex-start'
    })
  })
})
