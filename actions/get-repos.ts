import { Endpoints } from '@octokit/types';

const GITHUB_USERNAME = process.env['GITHUB_USERNAME'];
const GITHUB_TOKEN = process.env['GITHUB_TOKEN'];

type Repos = Endpoints['GET /users/{username}/repos']['response'];

export async function getRepos() {
  const apiUrl = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;
  const headers = { headers: { Authorization: `token ${GITHUB_TOKEN}` } };

  const res = await fetch(apiUrl, headers);

  if (!res.ok) {
    console.error('[GET_REPOS]', res.status);
  }

  const repos: Repos[] = await res.json();

  const filteredRepos = repos
    .filter((repo: any) => !repo.private)
    .map((repo: any) => {
      return {
        name: repo.name,
        description: repo.description,
      };
    });

  return filteredRepos;
}
