import Link from 'next/link';
import { GitFork, Star } from 'lucide-react';

import { getProject } from '@/octokit';

export type FeaturedProjectProps = {
  displayName: string;
  repoName: string;
};

// TODO Component UI
export async function FeaturedProject(props: FeaturedProjectProps) {
  const { displayName, repoName } = props;
  const project = await getProject(repoName);

  // TODO Error fallback UI?
  if (project === undefined) {
    return (
      <div className="aspect-auto rounded-xl border border-stone-400 p-4">
        <p>Uh-oh! Something went wrong.</p>
      </div>
    );
  }

  return (
    <Link
      href={project.html_url}
      target="_blank"
      className="flex flex-col items-center gap-y-2 rounded-xl border border-stone-400 px-2 pb-2 pt-1"
    >
      <h2 className="text-lg first-letter:text-2xl">{displayName}</h2>
      <p className="p-2">{project.description}</p>
      <div className="mt-auto">
        <div className="flex items-center gap-x-2">
          <p className="flex items-center gap-x-2 rounded border px-2 py-1 text-xs">
            {project.num_stars} <Star size={16} />
          </p>
          <p className="flex items-center gap-x-2 rounded border px-2 py-1 text-xs">
            {project.num_forks} <GitFork size={16} />
          </p>
        </div>
      </div>
    </Link>
  );
}
