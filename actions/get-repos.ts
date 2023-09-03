const GITHUB_USERNAME = process.env['GITHUB_USERNAME'];
const GITHUB_TOKEN = process.env['GITHUB_TOKEN'];

export async function getRepos() {
  const apiUrl = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;
  const headers = { headers: { Authorization: `token ${GITHUB_TOKEN}` } };

  const res = await fetch(apiUrl, headers);

  if (!res.ok) {
    console.error('[GET_REPOS]', res.status);
  }

  const repos = await res.json();

  return repos;
}
