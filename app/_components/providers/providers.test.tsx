import { render } from '@testing-library/react';
import { Providers } from './providers';

describe('<Providers />', () => {
  const para = <p>asd</p>;

  it('Should render Providers with no errors', () => {
    render(<Providers>{para}</Providers>);
  });
});
