import { render, screen } from '@testing-library/react';

import { Nav } from './nav';

describe('<Nav />', () => {
  it('renders the logo link with correct href', () => {
    render(<Nav />);
    const logoAnchor = screen.getByRole('link', { name: "Jesse's Digital Garden" });
    expect(logoAnchor).toBeInTheDocument();
    expect(logoAnchor).toHaveAttribute('href', '/');
  });

  it('renders the heading', () => {
    render(<Nav />);
    const heading = screen.getByRole('heading', {
      level: 1,
      name: "Jesse's Digital Garden",
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders Projects link with correct href', () => {
    render(<Nav />);
    const projectsLink = screen.getByRole('link', { name: /projects/i });
    expect(projectsLink).toBeInTheDocument();
    expect(projectsLink).toHaveAttribute('href', '#projects');
  });

  it('renders About link with correct href', () => {
    render(<Nav />);
    const aboutLink = screen.getByRole('link', { name: /about/i });
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute('href', '#about');
  });

  it('renders all navigation links', () => {
    render(<Nav />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3); // Logo, Projects, About
  });

  it('renders navigation element', () => {
    render(<Nav />);
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });
});
