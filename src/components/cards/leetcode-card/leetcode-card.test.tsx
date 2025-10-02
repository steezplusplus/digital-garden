import { render, screen } from '@testing-library/react';
import LeetCodeCard, { LEETCODE_HREF } from './leetcode-card';

describe('<LeetCodeCard />', () => {
  it('renders a link to my LeetCode profile', () => {
    render(<LeetCodeCard />);

    const anchor = screen.getByRole('link');
    expect(anchor).toBeInTheDocument();
    expect(anchor).toHaveAttribute('href', LEETCODE_HREF);
  });
  it('renders the headings', () => {
    render(<LeetCodeCard />);

    const title = screen.getByRole('heading', { name: 'LeetCode', level: 2 });
    expect(title).toBeInTheDocument();

    const subtitle = screen.getByRole('heading', { name: 'SteezPlusPlus', level: 3 });
    expect(subtitle).toBeInTheDocument();
  });
});
