import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Nav } from './nav';

describe('<Nav />', () => {
  it('Should render the logo anchor', () => {
    render(<Nav />);
    const logoAnchor = screen.getByRole('link', { name: "Jesse's Digital Garden" });
    expect(logoAnchor).toBeInTheDocument();
  });
  it('Should render a heading', () => {
    render(<Nav />);
    const heading = screen.getByRole('heading', {
      level: 1,
      name: "Jesse's Digital Garden",
    });
    expect(heading).toBeInTheDocument();
  });
  it('Nav actions cause no errors', async () => {
    render(<Nav />);
    const projectsButton = screen.getByRole('button', { name: 'Projects' });
    expect(projectsButton).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button'));
  });
});
