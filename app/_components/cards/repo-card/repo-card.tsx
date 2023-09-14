type RepoCardProps = {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  topics: string[] | undefined;
  numStargazers: number;
  numWatchers: number;
  numForks: number;
  numSubscribers: number | undefined;
};

// TODO Finish view
export function RepoCard(props: RepoCardProps) {
  const { id, name, description } = props;

  return (
    <article
      key={id}
      className="
        relative flex aspect-auto flex-col 
        rounded-xl border 
        border-stone-400 bg-white/50 px-6
        py-2 dark:bg-indigo-100/5
      "
    >
      <h3 className="text-lg">{name}</h3>
      <p className="text-sm">{description}</p>
    </article>
  );
}
