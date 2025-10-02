import { render, screen } from '@testing-library/react';
import SupportCard, { SUPPORT_HREF } from './support-card';

describe('<SupportCard />', () => {
  it('renders a link to my KoFi profile', () => {
    render(<SupportCard />);

    const anchor = screen.getByRole('link');
    expect(anchor).toBeInTheDocument();
    expect(anchor).toHaveAttribute('href', SUPPORT_HREF);
  });
  it('renders the headings', () => {
    render(<SupportCard />);

    const title = screen.getByRole('heading', { name: 'Support me!', level: 2 });
    expect(title).toBeInTheDocument();

    const subtitle = screen.getByRole('heading', { name: 'Buy me a coffee', level: 3 });
    expect(subtitle).toBeInTheDocument();
  });
});
