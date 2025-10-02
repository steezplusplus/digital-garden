import { render, screen, fireEvent, waitFor } from '@testing-library/react';

// Mock next-themes useTheme hook
const setThemeMock = jest.fn();
jest.mock('next-themes', () => ({
  useTheme: () => ({ theme: 'system', setTheme: setThemeMock }),
}));

import { ThemeSelect } from './theme-select';

describe('<ThemeSelect />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders a select and calls setTheme on change', async () => {
    render(<ThemeSelect />);

    // Wwait for the component to mount
    await waitFor(() => expect(screen.getByRole('combobox')).toBeInTheDocument());

    const select = screen.getByRole('combobox') as HTMLSelectElement;
    expect(select.value).toBe('system');

    fireEvent.change(select, { target: { value: 'dark' } });
    expect(setThemeMock).toHaveBeenCalledWith('dark');
  });
});
