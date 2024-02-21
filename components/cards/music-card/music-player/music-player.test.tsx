import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
  it('Should update aria label on click', async () => {
    window.HTMLMediaElement.prototype.pause = jest.fn().mockImplementation(() => {}); // Mock pause fn
    render(<MusicPlayer {...props} />);
    expect(screen.getByLabelText('Play the audio'));
    await userEvent.click(screen.getByRole('button'));
    expect(screen.getByLabelText('Pause the audio'));
  });
});
