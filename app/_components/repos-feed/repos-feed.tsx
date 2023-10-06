import { getRepos } from '@/octokit';
import { RepoCard, RepoCardSkeleton } from '../cards/repo-card/repo-card';

export const revalidate = 0;

export async function ReposFeed() {
  const repos = await getRepos();
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

export function ReposFeedSkeleton() {
  return (
    <>
      <RepoCardSkeleton />
      <RepoCardSkeleton />
      <RepoCardSkeleton />
    </>
  );
}
