import { render, screen } from '@testing-library/react';
import { RepoCard, RepoCardSkeleton } from './repo-card';

const props = {
  id: 0,
  name: 'name',
  description: 'description',
  language: 'language',
  topics: ['topic-1', 'topic-2'],
  numStargazers: 0,
  numWatchers: 0,
  numForks: 0,
  numSubscribers: 0,
  githubUrl: 'https://www.not-real.com',
};

describe('<RepoCard />', () => {
  it('Should render with no errors', () => {
    render(<RepoCard {...props} />);
    const heading3 = screen.getByRole('heading', { level: 3, name: props.name });
    const anchor = screen.getByRole('link');
    expect(heading3).toBeInTheDocument();
    expect(anchor).toHaveAttribute('href', props.githubUrl);
  });
});

describe('<RepoCardSkeleton />', () => {
  it('Should render with no errors', () => {
    render(<RepoCardSkeleton />);
  });
});
