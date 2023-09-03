import { Octokit } from '@octokit/rest';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const octokit = new Octokit({
  auth: GITHUB_TOKEN,
});

export async function getUser() {
  try {
    const { data } = await octokit.rest.users.getAuthenticated();

    const filteredData = {
      username: data.login,
      avatar_url: data.avatar_url,
      url: data.html_url,
      name: data.name,
      location: data.location,
      bio: data.bio,
      num_public_repos: data.public_repos,
      num_public_gists: data.public_gists,
      num_followers: data.followers,
      created_at: data.created_at,
    };

    return filteredData;
  } catch (error) {
    console.error('[GET_USER]');
    throw error;
  }
}

// TODO Sorting, pagination - https://octokit.github.io/rest.js/v20#repos
export async function getRepos() {
  try {
    const { data } = await octokit.rest.repos.listForAuthenticatedUser({
      visibility: 'public',
      affiliation: 'owner',
    });

    const filteredRepos = data.map((repo) => {
      return {
        name: repo.full_name,
        description: repo.description,
        url: repo.html_url,
        language: repo.language,
        homepage: repo.homepage,
        num_stars: repo.stargazers_count,
        topics: repo.topics,
        created_at: repo.created_at,
        updated_at: repo.updated_at,
      };
    });

    return filteredRepos;
  } catch (error) {
    console.error('[GET_REPOS]');
    throw error;
  }
}
