import { render, screen } from '@testing-library/react';
import GitHubCard, { GITHUB_HREF } from './github-card';

describe('<GitHubCard />', () => {
  it('renders a link to the repo', () => {
    render(<GitHubCard />);
    const anchor = screen.getByRole('link');
    expect(anchor).toBeInTheDocument();
    expect(anchor).toHaveAttribute('href', GITHUB_HREF);
  });
});
