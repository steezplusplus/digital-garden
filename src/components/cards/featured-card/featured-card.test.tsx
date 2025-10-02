import { render, screen } from '@testing-library/react';
import FeaturedCard from './featured-card';

describe('<FeaturedCard />', () => {
  it('renders the profile image and welcome text', () => {
    render(<FeaturedCard />);

    const img = screen.getByAltText('A profile picture');
    expect(img).toBeInTheDocument();

    const text = screen.getByText('Welcome to the garden.');
    expect(text).toBeInTheDocument();
  });
});
