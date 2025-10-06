import { Gamepad } from 'lucide-react';

import { getSteamStatistics } from '@/api/steam';

export default async function AboutSection() {
  const data = await getSteamStatistics();

  return (
    <div className='rounded-xl border border-stone-400 bg-white/50 p-4 dark:bg-indigo-100/5'>
      <pre>{JSON.stringify(data, null, 4)}</pre>
      <p>Owns {data.totalGames} on steam with {Math.floor(data.totalPlaytime / 60)} hours played.</p>
      <Gamepad />
    </div>
  );
}

export function AboutSectionSkeleton() {
  return <div>Loading Steam data...</div>;
}

