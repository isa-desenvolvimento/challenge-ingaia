import { screen } from '@testing-library/react'
import { renderWithProvider } from '../utils/helpers'
import Item from '../components/Item'

// eslint-disable-next-line react/display-name
jest.mock('next/image', () => ({ src, alt, width, height, status }) => (
  <img
    src={src}
    alt={alt}
    width={width}
    height={height}
    title={status}
    loading="lazy"
    role="image"
  />
))

describe('<Item />', () => {
  const props = {
    image: 'http://http2.mlstatic.com/D_844171-MLA41757309022_052020-O.jpg',
    name: 'TEST_NAME',
    species: 'HUMAN',
    status: 'ALIVE',
    width: '300',
    height: '300',
    onclick: jest.fn()
  }

  beforeEach(() =>
    renderWithProvider(
      <Item
        name={props.name}
        species={props.species}
        image={props.image}
        status={props.status}
        width={props.width}
        height={props.height}
        onclick={props.onclick}
      />
    )
  )

  it('should render the  titles', () => {
    expect(screen.getByRole(/image/i)).toBeInTheDocument()
    expect(screen.getByRole(/item_title/i).textContent).toEqual('TEST_NAME')
    expect(screen.getByRole(/item_text/i).textContent).toEqual('HUMAN')
  })

  it('should render the styled-components', () => {
    expect(screen.getByRole(/item_container/i).firstChild).toHaveStyle({
      'border-radius': '8px',
      'max-width': '500px'
    })
  })
})
