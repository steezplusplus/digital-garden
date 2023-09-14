import { render } from '@testing-library/react';
import { ProfileCard } from './profile-card';

describe('<ProfileCard />', () => {
  it('Should render with no errors', () => {
    render(<ProfileCard />);
  });
});
