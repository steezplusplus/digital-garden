import { render, screen } from '@testing-library/react';

jest.mock('../../theme-select/theme-select', () => ({
  ThemeSelect: () => <div data-testid="theme-select-mock">theme-select</div>,
}));

import ThemeCard from './theme-card';

describe('<ThemeCard />', () => {
  it('renders title and ThemeSelect', () => {
    render(<ThemeCard />);

    const title = screen.getByRole('heading', { name: 'Theme', level: 2 });
    expect(title).toBeInTheDocument();

    expect(screen.getByTestId('theme-select-mock')).toBeInTheDocument();
  });
});
