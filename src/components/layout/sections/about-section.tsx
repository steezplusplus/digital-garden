import { Gamepad } from 'lucide-react';

import { getSteamProfileAge, getSteamStatistics } from '@/api/steam';

export default async function AboutSection() {
  const { totalGames, totalPlayedGames, totalPlaytime } = await getSteamStatistics();
  const steamProfileAge = await getSteamProfileAge();
  const steamProfileDate = new Date(steamProfileAge * 1000).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <section>
      <h2 className="mb-4 text-3xl">Fun facts</h2>
      <div className='flex items-center gap-2 rounded-xl border border-stone-400 bg-white/50 p-4 dark:bg-indigo-100/5'>
        <Gamepad aria-hidden />
        <p>Owns {totalGames} on Steam, and has played {totalPlayedGames} of them totalling {totalPlaytime} hours played since {steamProfileDate}.</p>
      </div>
    </section>
  );
}

export function AboutSectionSkeleton() {
  return <div>Loading Steam data...</div>;
}

