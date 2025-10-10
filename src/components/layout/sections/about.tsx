import { Code, Gamepad, GitBranch, Keyboard, Music, User } from 'lucide-react';

import { getGitStats } from '@/api/octokit';
import { formatDate, formatNumber } from '@/lib/util';
import { getSteamStats } from '@/api/steam';

const sectionId = 'about-section-heading';

export default async function About() {
  const { createdAt: gitCreatedAt, totalCommits } = await getGitStats();
  const { createdAt: steamCreatedAt, totalHoursPlayed} = await getSteamStats();

  const formattedGitCreatedAt = formatDate(gitCreatedAt);
  const formattedCommitsThisYear = formatNumber(totalCommits);

  const formattedSteamCreatedAt = formatDate(steamCreatedAt * 1000);
  const formattedTotalHoursPlayed = formatNumber(totalHoursPlayed);

  return (
    <section aria-labelledby={sectionId}>
      <h2 id={sectionId} className="mb-4 text-3xl">About</h2>
      <ul className="flex flex-col gap-2">
        <AboutItem 
          text={`Jesse created his GitHub account on ${formattedGitCreatedAt}. He has made ${formattedCommitsThisYear} commits since then.`}
          icon={<GitBranch aria-hidden />}
        />
        <AboutItem 
          text={`Jesse created his Steam account on ${formattedSteamCreatedAt}. He has played ${formattedTotalHoursPlayed} hours of games since then.`}
          icon={<Gamepad aria-hidden />}
        />
        <AboutItem 
          text="Jesse created his Spotify account on x. He has listened to y hours of music since then."
          icon={<Music aria-hidden />}
        />
        <AboutItem 
          text="Jesse created his TypeRacer account on x. He has played y games and averages z words per minute."
          icon={<Keyboard aria-hidden />}
        />
        <AboutItem 
          text="Jesse created his Leetcode account on x. He has solved x problems since then."
          icon={<Code aria-hidden />}
        />
        <AboutItem 
          text="Jesse created this website."
          icon={<User aria-hidden />}
        />
      </ul>
    </section>
  );
}

function AboutItem({ text, icon }: { text: string; icon: React.ReactNode }) {
  return (
    <li className='flex items-center gap-2 rounded-xl border border-stone-400 bg-white/50 p-4 dark:bg-indigo-100/5'>
      {icon}
      <p>{text}</p>
    </li>
  );
}

// TODO: Update loading state
export function AboutSkeleton() {
  return <div>Loading data...</div>;
}