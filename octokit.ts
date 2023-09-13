import { Octokit } from '@octokit/rest';
import { GetResponseTypeFromEndpointMethod } from "@octokit/types";

// TODO Validators with Zod
const GIT_PAT = process.env.GIT_PAT;
const GIT_USERNAME = process.env.GIT_USERNAME; 
const NODE_ENV = process.env.NODE_ENV;

const octokitClient = new Octokit({
  auth: GIT_PAT,
  userAgent: 'steezplusplus',
  log: NODE_ENV === 'development' ? console : undefined
});

type GetReposResponseType = GetResponseTypeFromEndpointMethod<
  typeof octokitClient.repos.get
>;

type GetUserResponseType = GetResponseTypeFromEndpointMethod<typeof octokitClient.users.getAuthenticated>;

/**
 * https://octokit.github.io/rest.js/v20#users-get-authenticated
 */
export async function getUser() {
  try {
    const response: GetUserResponseType = await octokitClient.rest.users.getAuthenticated();

    const filteredData = {
      username: response.data.login,
      avatar_url: response.data.avatar_url,
      url: response.data.html_url,
      name: response.data.name,
      location: response.data.location,
      bio: response.data.bio,
      num_public_repos: response.data.public_repos,
      num_public_gists: response.data.public_gists,
      num_followers: response.data.followers,
      created_at: response.data.created_at,
    };

    return filteredData;
  } catch (error) {
    console.error('[GET_USER]');
    throw error;
  }
}

/**
 * https://octokit.github.io/rest.js/v20#repos-get
 * @param repo The name of the repository without the .git extension.
 */
export async function getProject(repoName: string) {
  if (!GIT_USERNAME) {
    throw new Error('[GET_PROJECT]: GIT_USERNAME is required');
  }

  try {
    const response: GetReposResponseType = await octokitClient.rest.repos.get({
      owner: GIT_USERNAME,
      repo: repoName,
    });

    const filteredProjectData = {
      html_url: response.data.html_url,
      description: response.data.description,
      language: response.data.language,
      num_stars: response.data.stargazers_count,
      num_forks: response.data.forks,
      num_subscribers: response.data.subscribers_count,
      license: response.data.license,
    };

    return filteredProjectData;
  } catch (error) {
    console.error('[GET_PROJECT]:', error);
  }
}
