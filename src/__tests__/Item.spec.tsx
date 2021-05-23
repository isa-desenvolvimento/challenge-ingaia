import { render } from '@testing-library/react'
import { renderWithProvider } from '../utils/helpers'
import Item from '../components/Item'

jest.mock('next/config', () => () => ({
  publicRuntimeConfig: {
    images: {
      domains: ['cdn.example.com']
    }
  }
}))

jest.mock('next/image', () => ({ src, alt, width, height, status }) => (
  <img
    src={src}
    alt={alt}
    width={width}
    height={height}
    objectFit="cover"
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
    width: 300,
    height: 300,
    onclick: jest.fn()
  }

  beforeEach(() => renderWithProvider(<Item {...props} />))

  it('should render component Item children', () => {
    expect(getByTestId('txt_price_item')).toHaveTextContent('R$ 100,00')
    expect(getByTestId('txt_title_item')).toHaveTextContent('test')
    expect(getByTestId('txt_address_item')).toHaveTextContent('city_name_test')
    expect(getByTestId('ic_shipping_item')).toBeVisible()
  })

  it('should render snapshot', () => {
    const { container } = render(<Item {...props} />)
    expect(container).toMatchSnapshot()
  })
})
