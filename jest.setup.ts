import '@testing-library/jest-dom';

// Jest uses "jsdom" environment for running tests which does not implement all browser API's
// So I have this mock the HTMLMediaElement.prototype.play method
Object.defineProperty(window.HTMLMediaElement.prototype, 'play', {
  configurable: true,
  get() {
    const original = jest.fn();
    return original;
  },
});

// Mock GSAP modules
jest.mock('gsap/dist/gsap', () => ({
  __esModule: true,
  default: {
    registerPlugin: jest.fn(),
    to: jest.fn(),
    from: jest.fn(),
    set: jest.fn(),
    timeline: jest.fn(() => ({
      to: jest.fn(),
      from: jest.fn(),
      set: jest.fn(),
    })),
  },
}));

jest.mock('gsap/dist/ScrollTrigger', () => ({
  ScrollTrigger: {},
}));

jest.mock('gsap/dist/TextPlugin', () => ({
  TextPlugin: {},
}));

jest.mock('@gsap/react', () => ({
  useGSAP: jest.fn((callback) => {
    // Optionally call the callback if you want to test the GSAP animations
    // For most cases, you can leave this empty to skip animation execution in tests
    // callback?.();
  }),
}));