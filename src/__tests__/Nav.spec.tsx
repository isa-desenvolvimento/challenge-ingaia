/* eslint-disable global-require */

import { screen, fireEvent, act } from '@testing-library/react'
import { renderWithProvider } from '../utils/helpers'
import Nav from '../components/Nav'
import router from 'next/router'

describe('<Nav />', () => {
  beforeEach(() => renderWithProvider(<Nav />))

  it('should render the styled-components titles', () => {
    const inputNode = screen.getByPlaceholderText(/Buscar personagem/i)

    expect(screen.getByRole(/logo/i)).toBeInTheDocument()

    expect(inputNode).toBeTruthy()
  })

  it('should render component Nav children', async () => {
    const value = 'rick'

    act(() => {
      fireEvent.change(screen.getByRole(/input/i), {
        target: { value }
      })
      fireEvent.click(screen.getByRole(/button/i))

      // router.push({
      //   pathname: '/characters/rick?page=1'
      // })

      //expect(router).toMatchObject('/characters/rick?page=1')
    })
  })

  it('should render the styled-components nav', () => {
    expect(screen.getByRole(/nav_container/i)).toHaveStyle({
      margin: '0 auto',
      display: 'grid',
      'justify-content': 'center',
      'align-items': 'center',
      'text-align': 'center'
    })
  })

  it('should render the styled-components input', () => {
    expect(screen.getByRole(/input/i)).toHaveStyle({
      'background-color': 'transparent',
      'border-color': 'rgba(255,255,255,0.664)',
      color: 'white',
      'padding-inline-start': '10px',
      'border-radius': '5px',
      height: '100%',
      padding: '1.8rem'
    })
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
