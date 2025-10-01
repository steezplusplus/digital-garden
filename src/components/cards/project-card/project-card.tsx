import Link from "next/link";

import Grid from "@/components/grid";

type ProjectCardProps = {
  id: number;
  name: string;
  description: string | null;
  stars: number;
  watchers: number;
  forks: number;
  githubUrl: string;
  pushedAt: string | null;
};

export default function ProjectCard(props: ProjectCardProps) {
  const {
    name,
    description,
    stars,
    watchers,
    forks,
    githubUrl,
    pushedAt,
  } = props;

  return (
    <Grid.Item className="flex flex-col gap-4">
      <div className="flex items-center">
        <h3 className="text-lg">{name}</h3>
        <span className="ml-auto">
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto"
          >
            x
          </Link>
        </span>
      </div>

      <p className="text-sm leading-relaxed line-clamp-2">{description}</p>
      <p className="text-xs">{pushedAt}</p>
      <hr />

      <div className="flex items-center gap-6 text-xs">
        <span># {stars}</span>
        <span># {forks}</span>
        <span># {watchers}</span>
      </div>
    </Grid.Item>
  );
}

// TODO: Improve skeleton UI
export function ProjectCardSkeleton() {
  return <Grid.Item></Grid.Item>
}