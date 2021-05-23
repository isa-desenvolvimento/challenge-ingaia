import { render } from '@testing-library/react';
import Link from '../components/Link';

describe('<Link />', () => {
  it('should render component Link children', () => {
    const { getByRole } = render(
      <Link href="/">
        <h1>Test Link</h1>
      </Link>,
    );
    expect(getByRole('heading', { name: /test Link/i })).toBeInTheDocument();
  });

  it('should render snapshot', () => {
    const { container } = render(
      <Link href="/">
        <h1>Test Link</h1>
      </Link>,
    );
    expect(container).toMatchSnapshot();
  });
});
