import { render } from '@testing-library/react';
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
  const para = <p>anything</p>;
  it('Should render Providers with no errors', () => {
    render(<Providers>{para}</Providers>);
  });
});
