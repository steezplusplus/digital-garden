import Link from 'next/link';

import { octokit } from '@/octokit';

const GITHUB_USERNAME = process.env.GITHUB_USERNAME;

export const featuredProjects = [
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

async function getRepo(repo: string) {
  if (!GITHUB_USERNAME) {
    throw new Error('[GET_REPO]: GITHUB_USERNAME is required');
  }

  try {
    const { data } = await octokit.rest.repos.get({
      owner: GITHUB_USERNAME,
      repo: repo,
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
    console.error('[GET_REPO]');
    throw error;
  }
}

export type FeaturedProject = {
  displayName: string;
  repoName: string;
};

export async function FeaturedProject(props: FeaturedProject) {
  const { displayName, repoName } = props;
  const project = await getRepo(repoName);

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
