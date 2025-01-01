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
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });
  const children = (
    <>
      <p data-testid="test">find me</p>
    </>
  );
  it('Should render with no errors', () => {
    render(<Providers>{children}</Providers>);
    const para = screen.getByTestId('test');
    expect(para).toBeInTheDocument();
  });
});
