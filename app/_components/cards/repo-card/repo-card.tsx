import { GitFork, Star } from 'lucide-react';
import Link from 'next/link';

type RepoCardProps = {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  topics: string[] | undefined;
  numStargazers: number;
  numWatchers: number;
  numForks: number;
  numSubscribers: number | undefined;
  githubUrl: string;
};

// TODO Finish view
export function RepoCard(props: RepoCardProps) {
  const {
    id,
    name,
    description,
    language,
    topics,
    numStargazers,
    numWatchers,
    numForks,
    numSubscribers,
    githubUrl,
  } = props;

  return (
    <article
      key={id}
      className="
        relative flex aspect-auto flex-col 
        rounded-xl border 
        border-stone-400 bg-white/50 px-6
        py-2 dark:bg-indigo-100/5
      "
    >
      <h3 className="mb-3 text-lg">{name}</h3>

      <p className="mb-2 flex items-center text-sm">{description}</p>

      <div className="my-auto mb-1 flex justify-evenly text-xs">
        <span className="flex items-center">
          <Star size={16} className="mr-1" /> {numStargazers}
        </span>
        <span className="flex items-center">
          <GitFork size={16} className="mr-1" /> {numForks}
        </span>
      </div>

      <div className="flex flex-col items-center">
        <Link
          className="text-blue-500 underline hover:text-blue-300"
          href={githubUrl}
          target="_blank"
        >
          View source code
        </Link>
      </div>
    </article>
  );
}

export function RepoCardSkeleton() {
  return (
    <article
      className="
            flex aspect-auto flex-col 
            rounded-xl border border-stone-400 
            bg-white/50 px-6 py-2
          "
    >
      <div className="mb-4 h-7 rounded bg-stone-200" />
      <div className="mb-2 h-10 rounded bg-stone-200" />
      <div className="my-auto mb-1 flex justify-evenly">
        <span className="flex items-center">
          <Star size={16} className="mr-1" />
          <span className="h-4 w-6 rounded bg-stone-200" />
        </span>
        <span className="flex items-center">
          <GitFork size={16} className="mr-1" />
          <span className="h-4 w-6 rounded bg-stone-200" />
        </span>
      </div>

      <div className="h-4 rounded bg-stone-200"></div>
    </article>
  );
}
