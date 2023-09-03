const GITHUB_USERNAME = process.env['GITHUB_USERNAME'];
const GITHUB_TOKEN = process.env['GITHUB_TOKEN'];

type User = {
  username: string;
  avatar_url: string;
  name: string;
  location: string;
  email: string;
  bio: string;
  followers: number;
};

export async function getUser() {
  const apiUrl = `https://api.github.com/users/${GITHUB_USERNAME}`;
  const headers = { headers: { Authorization: `token ${GITHUB_TOKEN}` } };

  const res = await fetch(apiUrl, headers);

  if (!res.ok) {
    console.error('[GET_USER]', res.status);
  }

  const json = await res.json();

  const user: User = {
    username: json.login,
    avatar_url: json.avatar_url,
    name: json.name,
    location: json.location,
    email: json.email,
    bio: json.bio,
    followers: json.followers,
  };

  return user;
}
