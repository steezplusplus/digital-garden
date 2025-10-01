import { render, screen } from '@testing-library/react';
import LinkedInCard, { LINKEDIN_HREF } from './linkedin-card';

describe('<LinkedInCard />', () => {
  it('renders a link to the linkedin profile', () => {
    render(<LinkedInCard />);
    const anchor = screen.getByRole('link');
    expect(anchor).toBeInTheDocument();
    expect(anchor).toHaveAttribute('href', LINKEDIN_HREF);
  });
});
