import ProjectCard, { ProjectCardSkeleton } from '@/components/cards/project-card/project-card';
import { getRepos } from '@/api/octokit';

const sectionId = 'projects-section-heading';

export default async function Projects() {
  const repos = await getRepos();

  if (repos.length === 0) {
    return (
      <section aria-labelledby={sectionId}>
        <h2 id={sectionId} className="mb-4 text-3xl">
          What I&apos;ve been working on
        </h2>
        <div className="aspect-auto rounded-xl border border-stone-400 bg-white/50 p-4 dark:bg-indigo-100/5">
          <p>Uh-oh! Something went wrong. Try reloading the page.</p>
        </div>
      </section>
    );
  }

  return (
    <section aria-labelledby={sectionId}>
      <h2 id={sectionId} className="mb-4 text-3xl">
        What I&apos;ve been working on
      </h2>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {repos.map((repo) => {
          return <ProjectCard key={repo.id} {...repo} />;
        })}
      </ul>
    </section>
  );
}

export function ProjectsSkeleton() {
  return (
    <section aria-labelledby={sectionId}>
      <h2 id={sectionId} className="mb-4 text-3xl">
        What I&apos;ve been working on
      </h2>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
      </ul>
    </section>
  );
}
