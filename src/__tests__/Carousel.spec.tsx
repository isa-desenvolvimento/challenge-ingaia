import { render } from '@testing-library/react';
import Carousel from '../components/Carousel';

jest.mock('next/config', () => () => ({
  publicRuntimeConfig: {
    images: {
      domains: ['cdn.example.com'],
    },
  },
}));

jest.mock('next/image', () => ({ src, alt }) => <img src={src} alt={alt} />);

describe('<Carousel />', () => {
  const images = [
    { url: 'http://http2.mlstatic.com/D_844171-MLA41757309022_052020-O.jpg', id: '844171-MLA41757309022_052020' },
  ];
  it('should render component Carousel children', () => {
    const { container } = render(
      <Carousel images={images} />,
    );
    expect(container).toBeTruthy();
  });

  it('should render snapshot', () => {
    const { container } = render(
      <Carousel images={images} />,
    );
    expect(container).toMatchSnapshot();
  });
});
