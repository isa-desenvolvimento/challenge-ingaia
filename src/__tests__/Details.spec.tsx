import { screen } from '@testing-library/react'
import Details from '../components/Details'
import { renderWithProvider } from '../utils/helpers'

describe('<Details />', () => {
  const details = {
    isOpen: true,
    onBackgroundClick: jest.fn(),
    onEscapeKeydown: jest.fn(),
    item: {
      name: 'foo',
      gender: 'male',
      species: 'human',
      status: 'alive',
      image: '/assets/background.png'
    }
  }

  beforeEach(() =>
    renderWithProvider(
      <Details
        isOpen={details.isOpen}
        onBackgroundClick={details.onBackgroundClick}
        onEscapeKeydown={details.onEscapeKeydown}
        item={details.item}
      />
    )
  )

  it('should render the styled-components titles', () => {
    expect(screen.getByRole(/button/i).textContent).toEqual('Fechar')
    expect(screen.getByRole(/title_about/i).textContent).toEqual('SOBRE')
    expect(screen.getByRole(/title_origin/i).textContent).toEqual('ORIGEM')
    expect(screen.getByRole(/title_location/i).textContent).toEqual(
      'LOCALIDADE'
    )
  })

  it('should render the styled-components texts', () => {
    expect(screen.getByRole(/about_text/i).textContent).toEqual(
      'foo is a male human. It is alive '
    )
    expect(screen.getByRole(/planet_origin_text/i).textContent).toEqual(
      'Planeta'
    )
    expect(screen.getByRole(/text_origin/i).textContent).toEqual(
      'Dimensão de Substituição'
    )
    expect(screen.getByRole(/location_text_planet/i).textContent).toEqual(
      'Planeta'
    )
    expect(screen.getByRole(/text_location/i).textContent).toEqual(
      'Dimensão de Substituição'
    )
  })

  it('should render the styled-components details', () => {
    expect(screen.getAllByRole(/modal/i)).toBeTruthy()
    expect(screen.getByRole(/modal/i)).toHaveStyle({
      background: '#00000080',
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '100%',
      height: '100vh',
      overflow: 'hidden'
    })
  })

  it('should render the styled-components container', () => {
    expect(screen.getByRole(/details_container/i)).toHaveStyle({
      position: 'relative',
      width: '80%',
      height: '80%',
      display: 'flex',
      'align-items': 'center',
      margin: '5% auto',
      'border-radius': '8px',
      'box-shadow': 'inset 0 0 1em #00000080,0 0 1em #00000080'
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

  it('should render the styled-components imagem', () => {
    expect(screen.getByRole(/image/i)).toHaveStyle({
      position: 'absolute',
      'box-sizing': 'border-box',
      padding: '0px',
      margin: 'auto',
      display: 'block',
      width: '0px',
      height: '0px',
      'min-width': '100%',
      'min-height': '100%',
      'object-fit': 'cover',
      'border-radius': 'inherit',
      'max-width': '100%',
      'max-height': '100%'
    })
  })
})
