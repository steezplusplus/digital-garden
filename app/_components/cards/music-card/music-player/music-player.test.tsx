import { render, screen } from '@testing-library/react';
import { MusicPlayer } from './music-player';

const props = {
  songPath: '/not-real.mp3',
};

describe('<MusicPlayer />', () => {
  it('Should expected elements', () => {
    window.HTMLMediaElement.prototype.pause = jest.fn().mockImplementation(() => {}); // Mock pause fn
    render(<MusicPlayer {...props} />);
    const button = screen.getByRole('button');
    const slider = screen.getByRole('slider');
    expect(button).toBeInTheDocument();
    expect(slider).toBeInTheDocument();
  });
});
