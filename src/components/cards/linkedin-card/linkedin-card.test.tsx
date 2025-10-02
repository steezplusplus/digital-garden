import { render, screen } from '@testing-library/react';
import LinkedInCard, { LINKEDIN_HREF } from './linkedin-card';

describe('<LinkedInCard />', () => {
  it('renders a link to my LinkedIn profile', () => {
    render(<LinkedInCard />);

    const anchor = screen.getByRole('link');
    expect(anchor).toBeInTheDocument();
    expect(anchor).toHaveAttribute('href', LINKEDIN_HREF);
  });
  it('renders the headings', () => {
    render(<LinkedInCard />);

    const title = screen.getByRole('heading', { name: 'LinkedIn', level: 2 });
    expect(title).toBeInTheDocument();

    const subtitle = screen.getByRole('heading', { name: 'in/jesse-bp', level: 3 });
    expect(subtitle).toBeInTheDocument();
  });
});
