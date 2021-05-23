import { render } from '@testing-library/react';
import Item from '../components/Item';

jest.mock('next/config', () => () => ({
  publicRuntimeConfig: {
    images: {
      domains: ['cdn.example.com'],
    },
  },
}));

jest.mock('next/image', () => ({ src, alt }) => <img src={src} alt={alt} />);

describe('<Item />', () => {
  const props = {
    thumbnail: 'http://http2.mlstatic.com/D_844171-MLA41757309022_052020-O.jpg',
    address: {
      city_name: 'city_name_test',
    },
    price: 100,
    id: 'test',
    title: 'test',
    shipping: {
      free_shipping: false,
    },
  };

  it('should render component Item children', () => {
    props.shipping.free_shipping = true;

    const { getByTestId } = render(
      <Item {...props} />,
    );

    expect(getByTestId('txt_price_item')).toHaveTextContent('R$ 100,00');
    expect(getByTestId('txt_title_item')).toHaveTextContent('test');
    expect(getByTestId('txt_address_item')).toHaveTextContent('city_name_test');
    expect(getByTestId('ic_shipping_item')).toBeVisible();
  });

  it('should render snapshot', () => {
    const { container } = render(
      <Item {...props} />,
    );
    expect(container).toMatchSnapshot();
  });
});
