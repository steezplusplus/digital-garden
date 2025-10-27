'use client';

import { useRef, useState, useEffect } from 'react';
import { Volume1, Play, Pause } from 'lucide-react';

export function Jukebox() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(60);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  // Update volume when it changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  // Handle play/pause
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  // Reset to initial state when song ends
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <div className="my-auto flex justify-center">
      <audio ref={audioRef} src="/song.mp3">
        Your browser does not support the <code>audio</code> element.
      </audio>
      <div className="flex rounded-sm border border-slate-400 px-2 py-1">
        <button
          className="h-full border-r px-2"
          onClick={togglePlayPause}
          aria-label={isPlaying ? 'Pause the audio' : 'Play the audio'}
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>
        <div className="flex w-full items-center gap-x-1 px-3">
          <Volume1 size={22} />
          <input
            className="w-full accent-slate-500"
            type="range"
            max="100"
            min="0"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            aria-label="Adjust the volume"
          />
        </div>
      </div>
    </div>
  );
}
