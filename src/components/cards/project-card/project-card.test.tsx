import { render, screen } from '@testing-library/react';
import ProjectCard from './project-card';
import type { ProjectCardProps } from './project-card';

describe('<ProjectCard />', () => {
  const description = 'A sample project';
  const updatedAt = '2020-01-02T00:00:00Z';

  const props: ProjectCardProps = {
    id: 1,
    name: 'my-repo',
    description,
    stars: 5,
    watchers: 3,
    forks: 2,
    githubUrl: 'https://github.com/steezplusplus/my-repo',
    updatedAt,
  };

  it('renders link, title, description, updated date and stats', () => {
    render(<ProjectCard {...props} />);

    const anchor = screen.getByRole('link', { name: /my-repo/i });
    expect(anchor).toBeInTheDocument();
    expect(anchor).toHaveAttribute('href', props.githubUrl);

    expect(screen.getByText(description)).toBeInTheDocument();
    
    expect(screen.getByText(/Last updated/i)).toBeInTheDocument();

    expect(screen.getByText(String(props.stars))).toBeInTheDocument();
    expect(screen.getByText(String(props.forks))).toBeInTheDocument();
    expect(screen.getByText(String(props.watchers))).toBeInTheDocument();
  });
});
