import { getRepos } from '@/octokit';
import { RepoCard } from '../cards/repo-card/repo-card';

export async function ReposFeed() {
  const repos = await getRepos();
  // throw new Promise(() => {}); // Use to test suspense fallback

  // TODO When would this be undefined?
  if (repos === undefined) {
    return (
      <div className="aspect-auto rounded-xl border border-stone-400 bg-white/50 p-4 dark:bg-indigo-100/5">
        <p>Uh-oh! Something went wrong.</p>
      </div>
    );
  }

  return (
    <>
      {repos.map((repo) => {
        return <RepoCard key={repo.id} {...repo} />;
      })}
    </>
  );
}
