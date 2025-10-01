import { render, screen } from '@testing-library/react';
import SupportCard, { SUPPORT_HREF } from './support-card';

describe('<SupportCard />', () => {
  it('renders a link to support', () => {
    render(<SupportCard />);
    const anchor = screen.getByRole('link');
    expect(anchor).toBeInTheDocument();
    expect(anchor).toHaveAttribute('href', SUPPORT_HREF);
  });
});
