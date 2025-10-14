import { render, screen } from '@testing-library/react';
import ContactCard, { MAILTO_HREF } from './contact-card';

describe('<ContactCard />', () => {
  it('renders a link to my email', () => {
    render(<ContactCard />);

    const anchor = screen.getByRole('link');
    expect(anchor).toBeInTheDocument();
    expect(anchor).toHaveAttribute('href', MAILTO_HREF);
  });
  it('renders the ContactCard', () => {
    render(<ContactCard />);

    const title = screen.getByRole('heading', { name: 'Contact', level: 2 });
    expect(title).toBeInTheDocument();

    const subtitle = screen.getByRole('heading', { name: 'Email me', level: 3 });
    expect(subtitle).toBeInTheDocument();
  });
});
