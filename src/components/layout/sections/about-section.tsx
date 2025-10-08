import { Gamepad, GitBranch } from 'lucide-react';

import { getGitStats } from '@/api/octokit';
import { formatDate, formatNumber } from '@/lib/util';
import { getSteamStats } from '@/api/steam';


export default async function AboutSection() {
  const { createdAt: gitCreatedAt, totalCommits } = await getGitStats();
  const { createdAt: steamCreatedAt, totalHoursPlayed} = await getSteamStats();

  const formattedGitCreatedAt = formatDate(gitCreatedAt);
  const formattedCommitsThisYear = formatNumber(totalCommits);

  const formattedSteamCreatedAt = formatDate(steamCreatedAt * 1000);
  const formattedTotalHoursPlayed = formatNumber(totalHoursPlayed);

  return (
    <section>
      <h2 className="mb-4 text-3xl">About</h2>
      <ul className="flex flex-col gap-2">
        <li className='flex items-center gap-2 rounded-xl border border-stone-400 bg-white/50 p-4 dark:bg-indigo-100/5'>
          <GitBranch aria-hidden />
          <p>
            Jesse created his GitHub account on {formattedGitCreatedAt}. He has made {formattedCommitsThisYear} commits since then.
          </p>
        </li>
        <li className='flex items-center gap-2 rounded-xl border border-stone-400 bg-white/50 p-4 dark:bg-indigo-100/5'>
          <Gamepad aria-hidden />
          <p>
            Jesse created his Steam account on {formattedSteamCreatedAt}. He has played {formattedTotalHoursPlayed} hours since then.
          </p>
        </li>
      </ul>
    </section>
  );
}

// TODO: Update loading state
export function AboutSectionSkeleton() {
  return <div>Loading data...</div>;
}