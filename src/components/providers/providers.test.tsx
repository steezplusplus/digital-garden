import { render, screen } from '@testing-library/react';
import { Providers } from './providers';

describe('<Providers />', () => {
  beforeEach(() => {

    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  it('renders children inside the ThemeProvider', () => {
    render(
      <Providers>
        <div data-testid="child">hello</div>
      </Providers>
    );

    expect(screen.getByTestId('child')).toBeInTheDocument();
  });
});
