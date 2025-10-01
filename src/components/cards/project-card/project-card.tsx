import Link from 'next/link';
import { Eye, GitFork, Star } from 'lucide-react';

type ProjectCardProps = {
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
    <li className="rounded-xl border border-stone-400 bg-white/50 dark:bg-indigo-100/5 flex flex-col gap-4 p-4">
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
          <Star size={14} /> {stars}
        </span>
        <span className="flex items-center justify-center gap-2">
          <GitFork size={14} /> {forks}
        </span>
        <span className="flex items-center justify-center gap-2">
          <Eye size={14} /> {watchers}
        </span>
      </div>
    </li>
  );
}

// TODO: Improve skeleton UI
export function ProjectCardSkeleton() {
  return <li className='rounded-xl border border-stone-400 bg-white/50 dark:bg-indigo-100/5'></li>;
}
