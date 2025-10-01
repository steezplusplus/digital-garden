import { render, screen } from '@testing-library/react';
import LeetCodeCard, { LEETCODE_HREF } from './leetcode-card';

describe('<LeetCodeCard />', () => {
  it('renders a link to the leetcode profile', () => {
    render(<LeetCodeCard />);
    const anchor = screen.getByRole('link');
    expect(anchor).toBeInTheDocument();
    expect(anchor).toHaveAttribute('href', LEETCODE_HREF);
  });
});
