import { render, screen } from '@testing-library/react';
import GitHubCard, { GITHUB_HREF } from './github-card';

describe('<GitHubCard />', () => {
  it('renders a link to my GitHub profile', () => {
    render(<GitHubCard />);

    const anchor = screen.getByRole('link');
    expect(anchor).toBeInTheDocument();
    expect(anchor).toHaveAttribute('href', GITHUB_HREF);

    expect(anchor).toHaveAttribute('target', '_blank');
    expect(anchor).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders the headings', () => {
    render(<GitHubCard />);

    const title = screen.getByRole('heading', { name: 'GitHub', level: 2 });
    expect(title).toBeInTheDocument();

    const subtitle = screen.getByRole('heading', { name: 'SteezPlusPlus', level: 3 });
    expect(subtitle).toBeInTheDocument();
  });
});
