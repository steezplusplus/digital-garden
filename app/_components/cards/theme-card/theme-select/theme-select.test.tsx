import { render, screen } from '@testing-library/react';
import { ThemeSelect } from './theme-select';

describe('<ThemeSelect />', () => {
  it('Should render with no errors', () => {
    render(<ThemeSelect />);
    const select = screen.getByRole('combobox');
    const opt1 = screen.getByRole('option', { name: 'System' });
    const opt2 = screen.getByRole('option', { name: 'Dark' });
    const opt3 = screen.getByRole('option', { name: 'Light' });
    expect(select).toBeInTheDocument();
    expect(opt1).toBeInTheDocument();
    expect(opt2).toBeInTheDocument();
    expect(opt3).toBeInTheDocument();
  });
});
