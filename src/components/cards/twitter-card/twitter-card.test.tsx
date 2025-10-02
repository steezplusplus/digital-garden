import { render, screen } from '@testing-library/react';
import TwitterCard, { TWITTER_HREF } from './twitter-card';

describe('<TwitterCard />', () => {
  it('renders a link to my Twitter profile', () => {
    render(<TwitterCard />);

    const anchor = screen.getByRole('link');
    expect(anchor).toBeInTheDocument();
    expect(anchor).toHaveAttribute('href', TWITTER_HREF);
  });
  it('renders the headings', () => {
    render(<TwitterCard />);

    const title = screen.getByRole('heading', { name: 'Twitter', level: 2 });
    expect(title).toBeInTheDocument();

    const subtitle = screen.getByRole('heading', { name: 'CodingSteez', level: 3 });
    expect(subtitle).toBeInTheDocument();
  });
});
