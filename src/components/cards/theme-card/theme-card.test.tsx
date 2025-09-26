import { render, screen } from '@testing-library/react';
import { ThemeCard } from './theme-card';

const props = {
  label: 'label',
  icon: <div>icon</div>,
};

describe('<ThemeCard />', () => {
  it('Should render expected elements', () => {
    render(<ThemeCard {...props} />);
    const h2 = screen.getByRole('heading', { level: 2 });
    const icon = screen.getByText('icon');
    expect(h2).toHaveTextContent(props.label);
    expect(icon).toBeInTheDocument();
  });
});
