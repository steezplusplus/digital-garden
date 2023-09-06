import { Audio } from './audio';
import { Music } from 'lucide-react';

const songPath = '/song.mp3';
const genre = 'LoFi';

export function MusicCard() {
  const label = 'Listening to...';
  return (
    <div className="col-span-2 flex aspect-auto flex-col rounded-xl border border-stone-400 p-4">
      <h2 className="mb-1 self-end text-lg first-letter:text-2xl">{label}</h2>
      <h3 className="self-end text-sm">{genre}</h3>
      <div className="my-auto flex justify-center">
        <Audio songPath={songPath} />
      </div>
      <Music className="mt-auto self-start" />
    </div>
  );
}
