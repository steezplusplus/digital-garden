import { render, screen } from '@testing-library/react';
import { Footer } from './footer';

describe('<Footer />', () => {
  it('Should render an anchor', () => {
    render(<Footer />);
    const anchor = screen.getByRole('link');
    expect(anchor).toBeInTheDocument();
  });
});
