import '@testing-library/jest-dom';

// For Next-Theme Provider
let localStorageMock: { [key: string]: string } = {};

beforeAll(() => {
  // Create a mock of the window.matchMedia function
  global.matchMedia = jest.fn((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }));

  // Create mocks of localStorage getItem and setItem functions
  global.Storage.prototype.getItem = jest.fn(
    (key: string) => localStorageMock[key]
  );
  global.Storage.prototype.setItem = jest.fn((key: string, value: string) => {
    localStorageMock[key] = value;
  });
});

beforeEach(() => {
  // Clear the localStorage-mock
  localStorageMock = {};
});
