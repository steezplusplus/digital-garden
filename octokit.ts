import { Octokit } from '@octokit/rest';
import { GetResponseTypeFromEndpointMethod } from '@octokit/types';

const octokitClient = new Octokit({
  userAgent: 'steezplusplus',
  auth: process.env.GIT_PAT,
  log: process.env.NODE_ENV === 'development' ? console : undefined,
});

type GetReposResponseType = GetResponseTypeFromEndpointMethod<
  typeof octokitClient.repos.listForAuthenticatedUser
>;

export async function getRepos() {
  try {
    const response: GetReposResponseType = await octokitClient.rest.repos.listForAuthenticatedUser({
      visibility: 'public',
      affiliation: 'owner',
      sort: 'updated',
      per_page: 9,
      page: 0,
    });

    const filteredData = response.data.map((repo) => {
      return {
        id: repo.id,
        name: repo.name,
        description: repo.description,
        language: repo.language,
        topics: repo.topics,
        numStargazers: repo.stargazers_count,
        numWatchers: repo.watchers_count,
        numForks: repo.forks_count,
        numSubscribers: repo.subscribers_count,
        githubUrl: repo.html_url,
      };
    });

    return filteredData;
  } catch (error) {
    console.error('[GET_REPOS]:', error);
  }
}
