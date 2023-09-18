import { render, screen } from '@testing-library/react';
import { MusicCard } from './music-card';

const props = {
  label: 'label',
  subLabel: 'subLabel',
};

describe('<MusicCard />', () => {
  it('Should expected elements', () => {
    render(<MusicCard {...props} />);
    const h2 = screen.getByRole('heading', { level: 2 });
    const h3 = screen.getByRole('heading', { level: 3 });
    expect(h2).toHaveTextContent(props.label);
    expect(h3).toHaveTextContent(props.subLabel);
  });
});
