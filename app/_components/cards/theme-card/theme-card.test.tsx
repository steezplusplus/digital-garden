import { render, screen } from '@testing-library/react';
import { ThemeCard } from './theme-card';

const props = {
  label: 'label',
};

describe('<ThemeCard />', () => {
  it('Should render expected elements', () => {
    render(<ThemeCard {...props} />);
    const h2 = screen.getByRole('heading', { level: 2 });
    expect(h2).toHaveTextContent(props.label);
  });
});
