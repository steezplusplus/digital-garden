import { render } from '@testing-library/react';

import { Jukebox } from './jukebox';

// Someday I will test this. But not today.
describe('<Jukebox />', () => {
  it('renders the component', () => {
    render(<Jukebox />);
  });
});
