import Link from 'next/link';
import { Eye, GitFork, Star } from 'lucide-react';

export type ProjectCardProps = {
  id: number;
  name: string;
  description: string | null;
  stars: number;
  watchers: number;
  forks: number;
  githubUrl: string;
  pushedAt: string | null;
};

export default function ProjectCard(props: ProjectCardProps) {
  const { name, description, stars, watchers, forks, githubUrl, pushedAt } = props;

  return (
    <li className="flex flex-col gap-4 rounded-xl border border-stone-400 bg-white/50 p-4 dark:bg-indigo-100/5">
      <div className="flex items-center">
        <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
          <h3 className="line-clamp-1 text-lg hover:underline">{name}</h3>
        </Link>
      </div>

      <p className="line-clamp-2 text-sm leading-relaxed">{description}</p>
      <p className="text-xs">Last updated {new Date(pushedAt as string).toLocaleDateString()}</p>
      <hr />

      <div className="flex items-center gap-6 text-xs">
        <span className="flex items-center justify-center gap-2">
          <Star size={14} aria-hidden="true" />
          <span className="sr-only">Number of stars</span>
          <span>{stars}</span>
        </span>
        <span className="flex items-center justify-center gap-2">
          <GitFork size={14} aria-hidden="true" />
          <span className="sr-only">Number of forks</span>
          <span>{forks}</span>
        </span>
        <span className="flex items-center justify-center gap-2">
          <Eye size={14} aria-hidden="true" />
          <span className="sr-only">Number of watchers</span>
          <span>{watchers}</span>
        </span>
      </div>
    </li>
  );
}

// TODO: Improve skeleton UI. Accent colors for pulse animation are somewhat arbitrary.
export function ProjectCardSkeleton() {
  return (
    <li className="flex flex-col gap-4 rounded-xl border border-stone-400 bg-white/50 p-4 dark:bg-indigo-100/5 min-h-[12rem]">
      <div className="flex items-center">
        <div className="h-5 w-3/4 rounded bg-stone-300/60 dark:bg-stone-700 animate-pulse" />
      </div>

      <div className="flex flex-col gap-2">
        <div className="h-3 w-full rounded bg-stone-300/60 dark:bg-stone-700 animate-pulse" />
        <div className="h-3 w-5/6 rounded bg-stone-300/60 dark:bg-stone-700 animate-pulse" />
      </div>


      <div className="h-3 w-1/3 rounded bg-stone-300/60 dark:bg-stone-700 animate-pulse" />

      <hr />

      <div className="flex items-center gap-6">
        <span className="h-6 w-12 rounded bg-stone-300/60 dark:bg-stone-700 animate-pulse" />
        <span className="h-6 w-12 rounded bg-stone-300/60 dark:bg-stone-700 animate-pulse" />
        <span className="h-6 w-12 rounded bg-stone-300/60 dark:bg-stone-700 animate-pulse" />
      </div>
    </li>
  );
}
