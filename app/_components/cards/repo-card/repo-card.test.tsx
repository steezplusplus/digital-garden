import { render } from '@testing-library/react';
import { RepoCard } from './repo-card';

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
};

describe('<RepoCard />', () => {
  it('Should render with no errors', () => {
    render(<RepoCard {...props} />);
  });
});
