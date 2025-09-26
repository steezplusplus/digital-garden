import { render } from '@testing-library/react';
import { Badge } from './badge';

describe('<Badge />', () => {
  it('Should render with no errors', () => {
    render(<Badge />);
  });
});
