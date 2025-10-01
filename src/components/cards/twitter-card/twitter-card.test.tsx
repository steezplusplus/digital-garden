import { render, screen } from '@testing-library/react';
import TwitterCard, { TWITTER_HREF } from './twitter-card';

describe('<TwitterCard />', () => {
  it('renders a link to the twitter profile', () => {
    render(<TwitterCard />);
    const anchor = screen.getByRole('link');
    expect(anchor).toBeInTheDocument();
    expect(anchor).toHaveAttribute('href', TWITTER_HREF);
  });
});
