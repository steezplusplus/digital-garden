import { render, screen } from '@testing-library/react';
import { Footer, githubRepoUrl, unlicenseUrl } from './footer';

describe('<Footer />', () => {
  it('should render both links', () => {
    render(<Footer />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);
  });

  it('should render Unlicense link with correct attributes', () => {
    render(<Footer />);
    const unlicenseLink = screen.getByRole('link', { name: /unlicense/i });
    
    expect(unlicenseLink).toBeInTheDocument();
    expect(unlicenseLink).toHaveAttribute('href', unlicenseUrl);
    expect(unlicenseLink).toHaveAttribute('target', '_blank');
    expect(unlicenseLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('should render Source link with correct attributes', () => {
    render(<Footer />);
    const sourceLink = screen.getByRole('link', { name: /source/i });
    
    expect(sourceLink).toBeInTheDocument();
    expect(sourceLink).toHaveAttribute('href', githubRepoUrl);
    expect(sourceLink).toHaveAttribute('target', '_blank');
    expect(sourceLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});