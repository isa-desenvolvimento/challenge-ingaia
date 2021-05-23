/* eslint-disable global-require */
import {
  render, fireEvent, act,
} from '@testing-library/react';
import router from 'next/router';
import Nav from '../components/Nav';

jest.mock('next/router', () => require('next-router-mock'));

describe('<Nav />', () => {
  it('should render component input', () => {
    const { getByPlaceholderText } = render(<Nav />);

    const inputNode = getByPlaceholderText(/Nunca dejes de buscar/i);
    expect(inputNode).toBeTruthy();
  });

  it('should render component Nav children', async () => {
    const value = 'apple';
    const { getByPlaceholderText, getByTestId } = render(<Nav />);

    act(() => {
      fireEvent.change(getByPlaceholderText(/Nunca dejes de buscar/i), { target: { value } });
      fireEvent.click(getByTestId('btn_nav'));

      router.push({
        pathname: `/items/${value}`,
      });

      expect(router).toMatchObject({
        pathname: '/items/apple',
      });
    });
  });

  it('should render snapshot', () => {
    const { container } = render(
      <Nav />,
    );
    expect(container).toMatchSnapshot();
  });
});
