import { Octokit as Core } from '@octokit/core';
import { restEndpointMethods } from '@octokit/plugin-rest-endpoint-methods';

const Octokit = Core.plugin(restEndpointMethods);

const NODE_ENV = process.env.NODE_ENV;
const GIT_PAT = process.env.GIT_PAT;

const isDev = NODE_ENV === 'development';

const octokit = new Octokit({
  userAgent: 'digital-garden',
  auth: GIT_PAT,
});

octokit.hook.before('request', (options: any) => {
  if (!isDev) {
    return;
  }

  const route = (options && (options.route || options.url)) ?? 'unknown';
  console.info('[octokit] request', { method: options.method, route });
});

octokit.hook.after('request', (response: any, options: any) => {
  if (!isDev) {
    return;
  }
  console.info('[octokit] response', {
    status: response && response.status,
    route: options && (options.route || options.url),
  });
});

type RepoDTO = {
  id: number;
  name: string;
  description: string | null;
  stars: number;
  watchers: number;
  forks: number;
  githubUrl: string;
  pushedAt: string | null;
};

export async function getRepos(): Promise<RepoDTO[]> {
  const repos = await octokit.rest.repos.listForAuthenticatedUser({
    visibility: 'public',
    affiliation: 'owner',
    sort: 'updated',
    per_page: 9,
    page: 1,
  });

  return repos.data.map((repo) => ({
    id: repo.id,
    name: repo.name,
    description: repo.description ?? null,
    stars: repo.stargazers_count,
    watchers: repo.watchers_count,
    forks: repo.forks_count,
    githubUrl: repo.html_url,
    pushedAt: repo.pushed_at ?? null,
  }));
}

export async function getGitProfileStats() {
  const user = await octokit.rest.users.getAuthenticated();
  const username = user.data.login;
  const createdAt = user.data.created_at;

  const createdAtQuery = new Date(createdAt).toISOString().split('T')[0];

  let totalCommits = 0;
  try {
    const response = await octokit.rest.search.commits({
      q: `author:${username} committer-date:>=${createdAtQuery}`,
      per_page: 1,
    });
    totalCommits = response.data.total_count;
  } catch (error) {
    console.error('Error fetching commits for this year:', error);
  }

  return {
    createdAt,
    totalCommits,
  };
}



