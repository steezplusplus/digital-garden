import { render, screen } from '@testing-library/react';
import { SupportCard } from './support-card';

const props = {
  label: 'Support me!',
  subLabel: 'Buy me a coffee',
  href: 'https://wwww.not-real.com',
  image: <></>,
};

describe('<SupportCard />', () => {
  it('Should render with no errors', () => {
    render(<SupportCard {...props} />);
    const anchor = screen.getByRole('link');
    const heading2 = screen.getByRole('heading', { level: 2 });
    const heading3 = screen.getByRole('heading', { level: 3 });
    expect(anchor).toHaveAttribute('href', props.href);
    expect(heading2).toHaveTextContent(props.label);
    expect(heading3).toHaveTextContent(props.subLabel);
  });
});
