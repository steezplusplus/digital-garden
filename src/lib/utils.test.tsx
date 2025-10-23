import { formatDate, formatNumber, sleep } from "./util";

// These are just minimal smoke tests. No reason to go in depth for these functions.

describe('util functions', () => {
  it('formatDate formats dates', () => {
    expect(formatDate('2020-01-02T00:00:00Z')).toBeTruthy();
  });

  it('formatNumber formats numbers', () => {
    expect(formatNumber(1000)).toBeTruthy();
  });

  it('sleep returns a promise', async () => {
    await expect(sleep(1)).resolves.toBeUndefined();
  });
});