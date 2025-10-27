import { render, screen } from '@testing-library/react';

import JukeboxCard from './jukebox-card';

describe('<JukeboxCard />', () => {
  it('renders without erroring', () => {
    render(<JukeboxCard />);
  });
});
