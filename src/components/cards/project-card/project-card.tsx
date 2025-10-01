import Grid from "@/components/grid";

type ProjectCardProps = {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  topics: string[] | undefined;
  numStargazers: number;
  numWatchers: number;
  numForks: number;
  githubUrl: string;
  pushedAt: string | null;
};

// TODO: Improve UI, remove unused props. First update octokit.ts to only fetch needed props.
export default function ProjectCard(props: ProjectCardProps) {
  const {
    name,
    description,
    language,
    topics,
    numStargazers,
    numWatchers,
    numForks,
    githubUrl,
    pushedAt,
  } = props;

  return (
    <Grid.Item className="flex flex-col gap-4">
      <div className="flex items-center">
        <h3 className="text-lg">{name}</h3>
        <span className="ml-auto">x</span>
      </div>

      <p className="text-sm leading-relaxed line-clamp-2">{description}</p>

      <p className="text-xs">Updated x days ago</p>

      <hr />

      <div className="flex items-center gap-6 text-xs">
        <span># Stargazers</span>
        <span># Forks</span>
        <span># Watchers</span>
      </div>
    </Grid.Item>
  );
}

// TODO: Improve skeleton UI
export function ProjectCardSkeleton() {
  return <Grid.Item></Grid.Item>
}