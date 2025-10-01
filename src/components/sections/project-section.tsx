import Grid from "@/components/grid";
import ProjectCard, { ProjectCardSkeleton } from "@/components/cards/project-card/project-card";
import { getRepos } from "@/api/octokit";

export default async function ProjectSection() {
  const repos = await getRepos();

  if (!repos) {
    return (
      <section aria-labelledby='project-section-heading'>
        <h2 id="project-section-heading" className="mb-4 text-3xl">
          What I've been working on
        </h2>
        <div className="aspect-auto rounded-xl border border-stone-400 bg-white/50 p-4 dark:bg-indigo-100/5">
          <p>Uh-oh! Something went wrong.</p>
        </div>
      </section>
    );
  }

  return (
    <section aria-labelledby='project-section-heading'>
      <h2 id="project-section-heading" className="mb-4 text-3xl">
        What I've been working on
      </h2>
      <Grid className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {repos.map((repo) => {
          return <ProjectCard key={repo.id} {...repo} />;
        })}
      </Grid>
    </section>
  );
}

export function ProjectSectionSkeleton() {
  return (
    <section aria-labelledby='project-section-heading'>
      <h2 id="project-section-heading" className="mb-4 text-3xl">
        What I've been working on
      </h2>
      <Grid className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
      </Grid>
    </section>
  )
}