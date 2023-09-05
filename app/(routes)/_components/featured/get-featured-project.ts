import { octokit } from '@/octokit';

const GITHUB_USERNAME = process.env.GITHUB_USERNAME; // TODO Type assertion with Zod

/**
 * https://octokit.github.io/rest.js/v20#repos-get
 * @param repo The name of the repository without the .git extension.
 */
export async function getFeaturedProject(repoName: string) {
  if (!GITHUB_USERNAME) {
    throw new Error('[GET_FEATURED_PROJECT]: GITHUB_USERNAME is required');
  }

  try {
    const { data } = await octokit.rest.repos.get({
      owner: GITHUB_USERNAME,
      repo: repoName,
    });

    const filteredProjectData = {
      html_url: data.html_url,
      description: data.description,
      language: data.language,
      num_stars: data.stargazers_count,
      num_forks: data.forks,
      num_subscribers: data.subscribers_count,
      license: data.license,
    };

    return filteredProjectData;
  } catch (error) {
    console.error('[GET_FEATURED_PROJECT]:', error);
  }
}
