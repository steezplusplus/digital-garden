import { render } from '@testing-library/react';
import { ContactCard } from './contact-card';

const props = {
  href: 'mailto:not-real@example.com',
  label: 'label',
  subLabel: 'subLabel',
  icon: <div></div>,
};

describe('<ContactCard />', () => {
  it('Should render with no errors', () => {
    render(<ContactCard {...props} />);
  });
});
