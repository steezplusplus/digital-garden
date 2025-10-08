import { GitBranch } from 'lucide-react';

import { getGitProfileStats } from '@/api/octokit';
import { formatDate, formatNumber } from '@/lib/util';


export default async function AboutSection() {
  const { createdAt, totalCommits } = await getGitProfileStats();

  const formattedGitCreatedAt = formatDate(createdAt);
  const formattedCommitsThisYear = formatNumber(totalCommits);

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
      </ul>
    </section>
  );
}

export function AboutSectionSkeleton() {
  return <div>Loading Steam data...</div>;
}