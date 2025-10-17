import { Code, Gamepad, GitBranch, Keyboard, Music, User } from 'lucide-react';

import { getGitStats } from '@/api/octokit';
import { formatDate, formatNumber } from '@/lib/util';
import { getSteamStats } from '@/api/steam';

const sectionId = 'about-section-heading';

export default async function About() {
  const { createdAt: gitCreatedAt, totalCommits } = await getGitStats();

  const formattedGitCreatedAt = formatDate(gitCreatedAt);
  const formattedCommitsThisYear = formatNumber(totalCommits);


  return (
    <section aria-labelledby={sectionId}>
      <h2 id={sectionId} className="mb-4 text-3xl">
        About
      </h2>
      <ul className="flex flex-col gap-2">
        <AboutItem
          text={`Jesse has made ${formattedCommitsThisYear} commits on GitHub since ${formattedGitCreatedAt}. Hopefully he will be good at programming someday.`}
          icon={<GitBranch aria-hidden />}
        />
      </ul>
    </section>
  );
}

function AboutItem({ text, icon }: { text: string; icon: React.ReactNode }) {
  return (
    <li className="flex items-center gap-2 rounded-xl border border-stone-400 bg-white/50 p-4 dark:bg-indigo-100/5">
      {icon}
      <p>{text}</p>
    </li>
  );
}

// TODO: Update loading state
export function AboutSkeleton() {
  return <div>Loading data...</div>;
}
