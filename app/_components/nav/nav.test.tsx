import { render, screen } from '@testing-library/react';
import { Nav } from './nav';

describe('<Nav />', () => {
  it('Should render an anchor', () => {
    render(<Nav />);
    const anchor = screen.getByRole('link');
    expect(anchor).toBeInTheDocument();
  });
  it('Should render a heading', () => {
    render(<Nav />);
    const heading = screen.getByRole('heading', {
      level: 1,
    });
    expect(heading).toBeInTheDocument();
  });
});
