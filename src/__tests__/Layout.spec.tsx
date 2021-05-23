/* eslint-disable global-require */
import { render } from '@testing-library/react';
import Layout from '../components/Layout';

jest.mock('next/router', () => require('next-router-mock'));

describe('<Layout />', () => {
  it('should render component Layout children', () => {
    const { getByRole } = render(
      <Layout>
        <h1>Test Layout</h1>
      </Layout>,
    );
    expect(getByRole('heading', { name: /test Layout/i })).toBeInTheDocument();
  });

  it('should render snapshot', () => {
    const { container } = render(
      <Layout>
        <h1>Test Layout</h1>
      </Layout>,
    );
    expect(container).toMatchSnapshot();
  });
});
