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
      github_profile_url: data.html_url,
      repos_url: data.repos_url,
      name: data.name,
      location: data.location,
      bio: data.bio,
      public_repos: data.public_repos,
      public_gists: data.public_gists,
      followers: data.followers,
      created_at: data.created_at,
    };

    return filteredData;
  } catch (error) {
    console.error('Error fetching user profile:', error);
  }
}
