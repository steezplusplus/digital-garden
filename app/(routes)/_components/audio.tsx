'use client';

import { Timer, Speaker, Play } from 'lucide-react';

type AudioProps = {
  songPath: string;
};

export function Audio(props: AudioProps) {
  const { songPath } = props;
  return (
    <>
      <audio>
        <source src={songPath} />
        Your browser does not support the <code>audio</code> element.
      </audio>
      <div className="my-auto flex h-1/3 items-center gap-x-4 rounded border border-slate-400">
        <button className="h-full border-r px-2">
          <Play size={16} />
        </button>
        <div className="flex w-full flex-col gap-y-2 pr-4">
          <div className="flex w-full items-center gap-x-4">
            <Timer size={16} />
            <input className="w-full" type="range" max="100" min="0" />
          </div>
          <div className="flex w-full items-center gap-x-4">
            <Speaker size={16} />
            <input className="w-full" type="range" max="100" min="0" />
          </div>
        </div>
      </div>
    </>
  );
}
