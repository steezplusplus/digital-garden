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
    <article
      className="
        flex aspect-auto flex-col overflow-hidden 
        rounded-xl border border-stone-400 
        px-6 py-2
      "
    >
      <header className="mb-4">
        <h2 className="first-letter:text-2xl">{displayName}</h2>
      </header>

      <section className="mb-5">
        <p className="text-sm">{project.description}</p>
      </section>

      <footer className="mt-auto flex flex-col gap-y-2">
        <section className="flex items-center justify-center gap-x-4 text-sm">
          <div className="flex items-center justify-center gap-x-1">
            <span>{project.num_stars}</span> <Star size={16} />
          </div>
          <div className="flex items-center justify-center gap-x-1">
            <span>{project.num_forks}</span> <GitFork size={16} />
          </div>
        </section>
        <Link
          href={project.html_url}
          target="_blank"
          className="flex items-center justify-center gap-x-2 rounded border px-2 py-1"
        >
          Source code
        </Link>
        <Link
          href="#TODO"
          target="_blank"
          className="flex items-center justify-center gap-x-2 rounded border px-2 py-1"
        >
          Website
        </Link>
      </footer>
    </article>
  );
}
