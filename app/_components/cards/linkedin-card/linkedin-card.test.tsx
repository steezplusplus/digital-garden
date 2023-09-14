import { render } from '@testing-library/react';
import { LinkedinCard } from './linkedin-card';

const props = {
  href: 'https://www.not-real.com',
  label: 'label',
  subLabel: 'subLabel',
  icon: <div></div>,
};

describe('<LinkedinCard />', () => {
  it('Should render with no errors', () => {
    render(<LinkedinCard {...props} />);
  });
});
