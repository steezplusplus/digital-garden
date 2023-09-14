import { getRepos } from '@/octokit';

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
        return (
          <article
            key={repo.id}
            className="
              relative flex aspect-auto flex-col 
              rounded-xl border 
              border-stone-400 bg-white/50 px-6
              py-2 dark:bg-indigo-100/5
            "
          >
            <h3 className="text-lg">{repo.name}</h3>
            <p className="text-sm">{repo.description}</p>
          </article>
        );
      })}
    </>
  );
}

// TODO pull into own file
function Badge() {
  return (
    <div
      className="
        absolute -right-2 -top-3
        rounded-lg border border-stone-400
      bg-indigo-50 px-2 py-1 text-xs
        font-semibold text-black
        dark:bg-neutral-900 dark:text-indigo-50
      "
    >
      New!
    </div>
  );
}
