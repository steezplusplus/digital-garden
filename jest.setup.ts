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