import { render, screen } from '@testing-library/react';
import { ContactCard } from './contact-card';

const props = {
  href: 'mailto:not-real@example.com',
  label: 'label',
  subLabel: 'subLabel',
  icon: <div></div>,
};

describe('<ContactCard />', () => {
  it('Should render with expected props', () => {
    render(<ContactCard {...props} />);
    const anchor = screen.getByRole('link');
    const heading2 = screen.getByRole('heading', { level: 2 });
    const heading3 = screen.getByRole('heading', { level: 3 });
    expect(anchor).toHaveAttribute('href', props.href);
    expect(heading2).toHaveTextContent(props.label);
    expect(heading3).toHaveTextContent(props.subLabel);
  });
});
