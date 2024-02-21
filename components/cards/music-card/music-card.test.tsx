import { render, screen } from '@testing-library/react';
import { MusicCard } from './music-card';

const props = {
  label: 'label',
  subLabel: 'subLabel',
};

describe('<MusicCard />', () => {
  it('Should expected elements', () => {
    window.HTMLMediaElement.prototype.pause = jest.fn().mockImplementation(() => {}); // Mock pause fn
    render(<MusicCard {...props} />);
    const h2 = screen.getByRole('heading', { level: 2, name: props.label });
    const h3 = screen.getByRole('heading', { level: 3, name: props.subLabel });
    expect(h2).toBeInTheDocument();
    expect(h3).toBeInTheDocument();
  });
});
