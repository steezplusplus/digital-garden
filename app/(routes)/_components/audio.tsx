'use client';

import { useRef, useState, useEffect } from 'react';
import { Timer, Speaker, Play, Pause } from 'lucide-react';

type AudioProps = {
  songPath: string;
};

export function Audio(props: AudioProps) {
  const { songPath } = props;
  const audioRef: React.RefObject<HTMLAudioElement> = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(60);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    if (audioRef && audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume, audioRef]);

  useEffect(() => {
    if (audioRef && audioRef.current && isPlaying) {
      audioRef.current.play();
    }
    if (audioRef && audioRef.current && !isPlaying) {
      audioRef.current.pause();
    }
  }, [isPlaying, audioRef]);

  return (
    <>
      <audio ref={audioRef} src={songPath}>
        Your browser does not support the <code>audio</code> element.
      </audio>
      <div className="my-auto flex h-1/3 items-center gap-x-4 rounded border border-slate-400">
        <button className="h-full border-r px-2" onClick={togglePlayPause}>
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>
        <div className="flex w-full flex-col gap-y-2 pr-4">
          <div className="flex w-full items-center gap-x-4">
            <Timer size={16} />
            <input className="w-full" type="range" max="100" min="0" />
          </div>
          <div className="flex w-full items-center gap-x-4">
            <Speaker size={16} />
            <input
              className="w-full"
              type="range"
              max="100"
              min="0"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
            />
          </div>
        </div>
      </div>
    </>
  );
}
