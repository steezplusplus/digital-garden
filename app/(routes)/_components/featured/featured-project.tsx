import Link from 'next/link';
import { getFeaturedProject } from './get-featured-project';

export type FeaturedProjectProps = {
  displayName: string;
  repoName: string;
};

// TODO Component UI
export async function FeaturedProject(props: FeaturedProjectProps) {
  const { displayName, repoName } = props;
  const project = await getFeaturedProject(repoName);

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
      className="aspect-auto rounded-xl border border-stone-400 p-4"
    >
      <h2>{displayName}</h2>
      <h3>{project.description}</h3>
      <p>{project.num_stars} stars</p>
      <p>{project.num_forks} forks</p>
      <p>{project.num_subscribers} subscribers</p>
      <p>Built with {project.language}</p>
      {project.license && <p>{project.license.name}</p>}
    </Link>
  );
}
