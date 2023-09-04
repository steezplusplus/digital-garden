import { Music } from 'lucide-react';

export function MusicCard() {
  const label = 'Listening to...';
  return (
    <div className="flex aspect-square flex-col rounded-xl border border-stone-400 p-4">
      <h2 className="mb-1 self-end text-lg first-letter:text-2xl">{label}</h2>
      <h3 className="self-end text-sm">Genre</h3>
      <Music className="mt-auto self-start" />
    </div>
  );
}
