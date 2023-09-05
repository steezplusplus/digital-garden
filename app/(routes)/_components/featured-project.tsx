import Link from 'next/link';
import { Suspense } from 'react';

import { octokit } from '@/octokit';

const GITHUB_USERNAME = process.env.GITHUB_USERNAME; // TODO Type assertion with Zod

/**
 * https://octokit.github.io/rest.js/v20#repos-get
 * @param repo The name of the repository without the .git extension.
 */
async function getRepo(repoName: string) {
  if (!GITHUB_USERNAME) {
    throw new Error('[GET_REPO]: GITHUB_USERNAME is required');
  }

  try {
    const { data } = await octokit.rest.repos.get({
      owner: GITHUB_USERNAME,
      repo: repoName,
    });

    const filteredRepoData = {
      html_url: data.html_url,
      description: data.description,
      language: data.language,
      num_stars: data.stargazers_count,
      num_forks: data.forks,
      num_subscribers: data.subscribers_count,
      license: data.license,
    };

    return filteredRepoData;
  } catch (error) {
    console.error('[GET_REPO]', error);
  }
}

type FeaturedProject = {
  displayName: string;
  repoName: string;
};

async function FeaturedProject(props: FeaturedProject) {
  const { displayName, repoName } = props;
  const project = await getRepo(repoName);

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

type FeaturedProjectWithKey = FeaturedProject & { key: string };

const featProjects: FeaturedProjectWithKey[] = [
  {
    displayName: 'E-commerce Store',
    repoName: 'ecommerce-store',
    key: 'ecommerce-store-0',
  },
  {
    displayName: 'E-commerce Admin',
    repoName: 'ecommerce-admin',
    key: 'ecommerce-admin-1',
  },
  {
    displayName: 'Chirp Chirp',
    repoName: 'chirp-chirp',
    key: 'chirp-chirp-2',
  },
];

export async function FeaturedProjectsFeed() {
  return (
    <div className="grid grid-cols-1 gap-8">
      {featProjects.map((featuredProject) => (
        <Suspense
          key={featuredProject.key}
          fallback={<p>Loading project...</p>}
        >
          <FeaturedProject
            displayName={featuredProject.displayName}
            repoName={featuredProject.repoName}
          />
        </Suspense>
      ))}
    </div>
  );
}
