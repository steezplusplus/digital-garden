import Link from 'next/link';
import { Eye, GitFork, Star } from 'lucide-react';

import { formatDate, formatNumber } from '@/lib/util';

export type ProjectCardProps = {
  id: number;
  name: string;
  description: string | null;
  stars: number;
  watchers: number;
  forks: number;
  githubUrl: string;
  updatedAt: string | null;
};

export default function ProjectCard(props: ProjectCardProps) {
  const { name, description, stars, watchers, forks, githubUrl, updatedAt } = props;

  const formattedUpdatedAt = updatedAt ? formatDate(updatedAt) : 'N/A';
  const formattedDescription = description ? description : 'No description available'
  const formattedStars = formatNumber(stars);
  const formattedForks = formatNumber(forks);
  const formattedWatchers = formatNumber(watchers);
  

  return (
    <li className="flex flex-col gap-4 rounded-xl border border-stone-400 bg-white/50 p-4 dark:bg-indigo-100/5">
      <div className="flex items-center">
        <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
          <h3 className="line-clamp-1 text-lg hover:underline">{name}</h3>
        </Link>
      </div>

      <p className="line-clamp-2 min-h-[2.75rem] text-sm leading-relaxed">{formattedDescription}</p>

      <p className="text-xs">Last updated {formattedUpdatedAt}</p>
      <hr />

      <div className="flex items-center gap-6 text-xs">
        <span className="flex items-center justify-center gap-2">
          <Star size={14} aria-hidden="true" />
          <span className="sr-only">Number of stars</span>
          <span>{formattedStars}</span>
        </span>
        <span className="flex items-center justify-center gap-2">
          <GitFork size={14} aria-hidden="true" />
          <span className="sr-only">Number of forks</span>
          <span>{formattedForks}</span>
        </span>
        <span className="flex items-center justify-center gap-2">
          <Eye size={14} aria-hidden="true" />
          <span className="sr-only">Number of watchers</span>
          <span>{formattedWatchers}</span>
        </span>
      </div>
    </li>
  );
}

// TODO: Improve skeleton UI. Accent colors for pulse animation are somewhat arbitrary.
export function ProjectCardSkeleton() {
  return (
    <li className="flex min-h-[12rem] flex-col gap-4 rounded-xl border border-stone-400 bg-white/50 p-4 dark:bg-indigo-100/5">
      <div className="flex items-center">
        <div className="h-5 w-3/4 animate-pulse rounded bg-stone-300/60 dark:bg-stone-700" />
      </div>

      <div className="flex flex-col gap-2">
        <div className="h-3 w-full animate-pulse rounded bg-stone-300/60 dark:bg-stone-700" />
        <div className="h-3 w-5/6 animate-pulse rounded bg-stone-300/60 dark:bg-stone-700" />
      </div>

      <div className="h-3 w-1/3 animate-pulse rounded bg-stone-300/60 dark:bg-stone-700" />

      <hr />

      <div className="flex items-center gap-6">
        <span className="h-6 w-12 animate-pulse rounded bg-stone-300/60 dark:bg-stone-700" />
        <span className="h-6 w-12 animate-pulse rounded bg-stone-300/60 dark:bg-stone-700" />
        <span className="h-6 w-12 animate-pulse rounded bg-stone-300/60 dark:bg-stone-700" />
      </div>
    </li>
  );
}
